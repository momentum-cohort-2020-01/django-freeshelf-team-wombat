from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse

from .models import Book, Category
from .forms import BookForm


def book_list(request):
    books = Book.objects.all()
    return render(request, 'core/book_list.html', {"books": books})

def book_detail(request, pk):
    book = Book.objects.get(pk=pk)
    return render(request, 'core/book_detail.html', {'book': book, "pk": pk})


def new_book(request):
    if request.method == "POST":
        form = BookForm(request.POST)
        if form.is_valid():
            book = form.save(commit=False)
            book.save()
            return redirect('book-detail', pk=book.pk)
    else:
        form = BookForm()
    return render(request, 'core/new_book.html', {'form': form})


def edit_book(request, pk):
    book = get_object_or_404(Book, pk=pk)
    if request.method == "POST":
        form = BookForm(request.POST, instance=book)
        if form.is_valid():
            book = form.save(commit=False)
            book.save()
            return redirect('book-detail', pk=book.pk)
    else:
        form = BookForm(instance=book)
    return render(request, 'core/edit_book.html', {'form': form})


def delete_book(request, pk):
    book = get_object_or_404(Book, pk=pk)
    book.delete()
    return redirect('book-list')

def book_by_category(request, slug):
    category = Category.objects.get(slug=slug)
    book_by_category = Book.objects.filter(category=category)
    return render(request, 'core/book_by_category.html', {'books': book_by_category, 'category':category})
