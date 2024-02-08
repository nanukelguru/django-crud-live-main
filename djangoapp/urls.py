from django.urls import path
from . import views

urlpatterns = [
    path('', views.getProducts),
    path('create', views.addProduct),
    path('update/<str:pk>', views.updateProduct),
    path('delete/<str:pk>', views.deleteProduct),
]