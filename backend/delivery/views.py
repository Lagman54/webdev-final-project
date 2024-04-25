import json
from django import views
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Order, OrderItem, Product
from .serializers import CategorySerializer, OrderItemSerializer, OrderSerializer, ProductSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination

@api_view(['GET'])
def category_list(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def orders(request):
    if request.method == "GET":
        order = Order.objects.filter(user=request.user.id, completed=False).last()

        order_items = OrderItem.objects.filter(order=order)
        serializer = OrderItemSerializer(order_items, many=True)

        return Response(serializer.data)


class Products(generics.ListAPIView):
    class StandardResultsSetPagination(PageNumberPagination):
        page_size = 6
        page_size_query_param = 'page_size'

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination
    

class ProductsByCategory(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        categoryId = self.kwargs['pk']
        return Product.objects.filter(category__pk=categoryId)
    

