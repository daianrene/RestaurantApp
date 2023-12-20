export default mapOrderObject(order){
    return {
        orderNumberId=order.orderNumber,
        customer:{id:order.customerId}
    }
}