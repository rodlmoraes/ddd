import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("1", "John");
const address = new Address("Street", 123, "12345", "City");
customer.address = address;
customer.activate();

console.log(customer);

const item1 = new OrderItem("1", "Item 1", 100);
const item2 = new OrderItem("2", "Item 2", 200);
const order = new Order("1", customer._id, [item1, item2]);

console.log(order);