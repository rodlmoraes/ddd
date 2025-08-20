import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            new Order("123", "", []);
        }).toThrow("CustomerId is required");
    });

    it("should throw error when items is empty", () => {
        expect(() => {
            new Order("123", "123", []);
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        const order = new Order("123", "123", [
            new OrderItem("1", "Item 1", 100),
            new OrderItem("2", "Item 2", 200),
        ]);
        expect(order.total()).toBe(300);
    });
});
