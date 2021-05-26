from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import FibonacciSerializer
from .serializers import FibonacciMiniSerializer
from .models import Fibonacci
from rest_framework.response import Response
from . import serializers
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def fab_list(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Fibonacci.objects.all()
        serializer = FibonacciSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FibonacciSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
