from django.urls import path, include
from .views import custom_obtain_auth_token, ProductListCreateView, ProductRetrieveUpdateDestroyView, category_list, product_list, CategoryAPIView, ProductAPIView

urlpatterns = [
    path('api-token-auth/', custom_obtain_auth_token),
    path('products/', ProductListCreateView.as_view()),
    path('products/<int:pk>/', ProductRetrieveUpdateDestroyView.as_view()),
    path('categories/', category_list),
    path('fbv/categories/', CategoryAPIView.as_view()),
    path('fbv/products/', ProductAPIView.as_view()),
    path('api-auth/', include('djoser.urls')),
]
