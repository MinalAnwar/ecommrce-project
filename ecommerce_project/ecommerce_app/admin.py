from django.contrib import admin
from .models import *

# Register your models here.
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]

admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage) 
admin.site.register(ProductCategory)
admin.site.register(Order)
admin.site.register(User)
admin.site.register(Address)
admin.site.register(Payment)
admin.site.register(Cart)
admin.site.register(CartProduct)
admin.site.register(OrderProduct)
