var db = require("./dbconnection")
var connection = db.DbConnection;
function addProduct(product) {
    connection.query("Insert into products(name,description,price,quantity)" +
        "values('" + product.name + ",'" + product.description + "'," +
        "'" + product.price + "','" + product.quantity + "')", function (error, result) {
            if (error) {
                return null;
            }
            else {
                return JSON.stringify(result);
            }
        });
}
function getProducts(callback) {

    connection.query("select name, description, price, quantity from products", function (err, result) {
        if (err) throw err;
        else {
            console.log()
            callback(result);
        }
    });
}
function getProduct(id, callback) {
    connection.query("select name, description, price, quantity from products where id=" + id, function (err, result) {
        if (err) throw err;
        else {
            console.log()
            callback(result);
        }
    });
}

function updateProduct(product, callback) {
    connection.query("update products set description='"
        + product.description + "' price='" + product.price +
        "' quantity='" + product.quantity + "' where id='" + product.id + "'", function (err, result) {
            if (err) {
                callback(false);

            } else {
                callback(true);
            }
        })
}

function deleteProduct(id, callback) {
    let now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    connection.query("update products set deleted_at=" + now, function (err, result) {
        if (err) {
            console.log("error deleting product ")
            callback(false)
        }
        else {

            callback(true);
        }

    });
}
exports.AddProduct = addProduct;
exports.DeleteProduct = deleteProduct;
exports.GetProduct = getProduct;
exports.GetProducts = getProducts;