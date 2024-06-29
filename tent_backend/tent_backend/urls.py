from django.contrib import admin
from django.urls import path
from . import views
from .views import apiOverview, PostListAPIView, PostListCreate, RelatedPostsAPIView, PostDetailAPIView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('api/', apiOverview, name='api-overview'),
    path('api/posts/', PostListAPIView.as_view(), name='post-list-api'),
    path('api/posts-create/', PostListCreate.as_view(), name='post-list-create'),
    path('api/posts/<int:post_id>/related/', RelatedPostsAPIView.as_view(), name='related-posts-api'),
    path('api/posts/<int:post_id>/', PostDetailAPIView.as_view(), name='post-detail-api')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

