from datetime import datetime

from django.db import models
from django.utils.timezone import now

# Create your models here.
class Fibonacci(models.Model):
    FibonacciNumber = models.IntegerField()
    # to add the default date time
    time = models.DateTimeField(auto_now_add=True)