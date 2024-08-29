from django.contrib import admin
from .models import *


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage) 
admin.site.register(ProductCategory)
admin.site.register(Cart)
admin.site.register(CartProduct)
admin.site.register(OrderProduct)
