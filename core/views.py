from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse

from .models import Book

from .form import BookForm


def book_list(request):
    books = Book.objects.all()
    return render(request, 'core/book_list.html', {"books": books})


def new_book(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            book = form.save(commit=False)
            book.save()
            return redirect('book-list', pk=book.pk)
    else:
        form = BookForm
    return render(request, 'core/new_book.html', {'form': form})


def edit_book(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            book = form.save(commit=False)
            book.save()
            return redirect('book-list', pk=book.pk)
    else:
        form = BookForm(instance=book)
    return render(request, 'core/edit_book.html', {'form': form})


def delete_book(request, pk):
    book = get_object_or_404(Book, pk=pk)
    book.delete()
    return redirect('book-list')
