from rest_framework import generics
from .models import Post
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import PostSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
import random

@api_view(['GET'])
def apiOverview(request):
    return Response("Hello, world!")

def index(request):
    return render(request, 'index.html')

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostListAPIView(APIView):
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        pass


class RelatedPostsAPIView(APIView):
  def get(self, request, post_id, format=None):
    current_post = Post.objects.get(id=post_id)
    related_posts = Post.objects.filter(
      Q(title__icontains=current_post.title.split()[0]) |
      Q(location=current_post.location)
    ).exclude(id=post_id)
    related_posts = random.sample(list(related_posts), min(len(related_posts), 4))
    serializer = PostSerializer(related_posts, many=True)
    return Response(serializer.data)


class PostDetailAPIView(APIView):
    def get(self, request, post_id, format=None):
      post = get_object_or_404(Post, id=post_id)
      serializer = PostSerializer(post)
      return Response(serializer.data)
