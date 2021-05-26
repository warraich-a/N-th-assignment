from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Fibonacci


class FibonacciSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fibonacci
        fields = ('id', 'FibonacciNumber', 'time')

class FibonacciMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fibonacci
        fields = ('id', 'FibonacciNumber')


class FibonacciPostSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(many=False)

    class Meta:
        model = Fibonacci
        fields = ('id', 'user', 'time')