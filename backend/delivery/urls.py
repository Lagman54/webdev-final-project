from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:pk>/products/', views.ProductsByCategory.as_view()),
    path('orders/', views.orders),
    path('products/', views.Products.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
]
