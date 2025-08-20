import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            new Customer("", "John Doe");
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            new Customer("123", "");
        }).toThrow("Name is required");
    });

    it("should change name", () => {
        const customer = new Customer("123", "John Doe");
        customer.changeName("Jane Doe");
        expect(customer.name).toBe("Jane Doe");
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "John Doe");
        const address = new Address("123 Main St", 12345, "New York", "NY");
        customer.address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    });

    it("should throw error when address is undefined when activating a customer", () => {
        const customer = new Customer("123", "John Doe");
        expect(() => {
            customer.activate();
        }).toThrow("Address is required");
    });

    it("should deactivate customer", () => {
        const customer = new Customer("123", "John Doe");
        const address = new Address("123 Main St", 12345, "New York", "NY");
        customer.address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);

        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    });
});
