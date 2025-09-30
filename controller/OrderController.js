import { order_array } from "../db/DB.js";
import Order from "../model/Order.js";

const cleanForm = () => {
  $("#order-id").val("");
  $("#order-date").val("");
  $("#order-customer-id").val("");
  $("#order-total").val("");
};

const loadTable = () => {
  $("#order-table-body").empty();
  order_array.forEach((order) => {
    const dataElement = `<tr><td>${order.order_id}</td><td>${order.date}</td><td>${order.customer_id}</td><td>Rs. ${order.total}.00</td></tr>`;
    $("#order-table-body").append(dataElement);
  });
};

$("#btn-order-save").on("click", (e) => {
  e.preventDefault();

  const order_id = $("#order-id").val();
  const order_date = $("#order-date").val();
  const order_customer_id = $("#order-customer-id").val();
  const order_total = $("#order-total").val();

  const order = new Order(order_id, order_date, order_customer_id, order_total);
  order_array.push(order);
  loadTable();
  cleanForm();
});
loadTable();
