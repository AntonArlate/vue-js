<!-- Вы разрабатываете приложение для интернет-магазина -->
<!-- у вас есть компонент Vue под названием "ProductDetails". -->
<!-- Компонент отображает детали о конкретном продукте-->
<template>
    <div>
        <!-- название продукта -->
        <h2>{{ product.name }}</h2>
        <!-- его форматированную цену -->
        <p>{{ formattedPrice }}</p>
        <!-- статус доступности -->
        <!-- Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock". -->
        <p>{{ product.available ? 'Available' : 'Out of stock' }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // Внутри компонента "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте
            product: {
                name: 'Example Product', // "name" (название продукта)
                price: 99.99, // "price" (цена продукта)
                available: true // "available" (флаг, указывающий на доступность продукта)
            }
        };
    },
    computed: {
        // Используя вычисляемое свойство, назовите его "formattedPrice"
        formattedPrice() {
            // будет возвращать форматированную цену продукта со знаком валюты
            return `$${this.product.price.toFixed(2)}`;
        }
    }
};
</script>
  
<style scoped>
h2 {
    font-size: 18px;
    font-weight: bold;
}

p {
    font-size: 14px;
}
</style>