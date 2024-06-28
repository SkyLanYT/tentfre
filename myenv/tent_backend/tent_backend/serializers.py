from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def get_createdAt(self, obj):
        return obj.createdAt.strftime('%Y-%m-%d %H:%M')