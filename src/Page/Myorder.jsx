import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Myorder = () => {
  const [myorder, setMyorder] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch user's orders
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:4000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const userOrders = Array.isArray(data)
          ? data.filter((order) => order.email === user.email)
          : [];
        setMyorder(userOrders);
      })
      .catch((err) => console.log("Error fetching orders:", err));
  }, [user?.email]);

  // Format price
  const formatPrice = (price) => {
    if (price === 0 || price === "0") return "Free";
    if (!price) return "Contact for Price";
    return `$${price}`;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "Date not specified";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  // Calculate total
  const calculateTotal = (price, quantity) => {
    const total = (parseFloat(price) || 0) * (parseInt(quantity) || 1);
    return formatPrice(total);
  };

  return (
    <div className="p-4 md:p-8">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-base-content">My Orders</h1>
        <p className="text-base-content/70 mt-1">
          Manage and track your service requests
        </p>
      </div>

      {/* No Orders */}
      {myorder.length === 0 ? (
        <div className="bg-base-200 rounded-xl p-10 text-center shadow">
          <div className="max-w-md mx-auto">
            <svg
              className="h-16 w-16 mx-auto text-base-content/40 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>

            <h3 className="text-xl font-semibold text-base-content">
              No Orders Found
            </h3>

            <p className="text-base-content/70 mt-2 mb-4">
              You haven't placed any orders yet.
            </p>

            <Link to="/services" className="btn btn-primary px-6">
              Browse Services
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Orders Table */}
          <div className="overflow-x-auto bg-base-100 rounded-xl shadow-lg border border-base-300">
            <table className="table table-zebra">
              <thead className="bg-base-200 text-base-content">
                <tr>
                  <th></th>
                  <th>Product/Service</th>
                  <th>Order Details</th>
                  <th>Contact Info</th>
                  <th>Total</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {myorder.map((order, index) => (
                  <tr key={order._id} className="hover:bg-base-200/60">
                    <td>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </td>

                    {/* Product */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle bg-primary/10 p-3">
                            <svg
                              className="h-6 w-6 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                              />
                            </svg>
                          </div>
                        </div>

                        <div>
                          <div className="font-semibold text-base-content">
                            {order.productName}
                          </div>
                          <div className="text-xs text-base-content/70">
                            Order #{order._id?.slice(-8)}
                          </div>
                          {order.additionalNotes && (
                            <div className="text-xs text-base-content/60 mt-1 line-clamp-1">
                              Note: {order.additionalNotes}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Order Details */}
                    <td>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="text-base-content/70">Qty: </span>
                          <span className="font-medium">
                            {order.quantity || 1}
                          </span>
                        </p>
                        <p>
                          <span className="text-base-content/70">
                            Unit Price:{" "}
                          </span>
                          <span className="font-medium">
                            {formatPrice(order.price)}
                          </span>
                        </p>
                        <p>
                          <span className="text-base-content/70">
                            Address:{" "}
                          </span>
                          <span className="font-medium">
                            {order.address?.slice(0, 22)}...
                          </span>
                        </p>
                      </div>
                    </td>

                    {/* Contact */}
                    <td>
                      <div className="space-y-1 text-sm">
                        <p className="font-medium">{order.buyerName}</p>
                        <p className="text-base-content/70">{order.email}</p>
                        <p className="text-base-content/70">{order.phone}</p>
                      </div>
                    </td>

                    {/* Total */}
                    <td className="font-bold text-primary">
                      {calculateTotal(order.price, order.quantity)}
                    </td>

                    {/* Date */}
                    <td className="text-sm">{formatDate(order.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat bg-base-100 border rounded-xl border-base-300 shadow">
              <div className="stat-title text-base-content/70">
                Total Orders
              </div>
              <div className="stat-value text-primary">{myorder.length}</div>
              <div className="stat-desc">All time</div>
            </div>

            <div className="stat bg-base-100 border rounded-xl border-base-300 shadow">
              <div className="stat-title text-base-content/70">Total Value</div>
              <div className="stat-value text-secondary">
                {formatPrice(
                  myorder.reduce((total, o) => {
                    return (
                      total +
                      (parseFloat(o.price) || 0) * (parseInt(o.quantity) || 1)
                    );
                  }, 0)
                )}
              </div>
              <div className="stat-desc">Estimated total</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Myorder;
