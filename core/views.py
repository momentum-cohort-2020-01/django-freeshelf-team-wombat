from django.shortcuts import render
from django.http import HttpResponse

from .models import Book
import pandas



def read(request):
    df = pandas.read_csv('sample_books.csv')
    print(df)
    return render(request, 'core/book_list.html', {"books": df})


def book_list(request):
    books = Book.objects.all()
    return render(request, 'core/book_list.html', {"books": books})