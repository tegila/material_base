import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  bootstrapRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    padding: "10px 12px",
    width: "34px",
    height: "8px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  root: {
    flexGrow: 1,
    fontFamily: "Roboto, sans-serif"
  },
  header: {
    padding: "0px 10px",
    height: "60px",
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  menu: {
    height: "40px"
  },
  logo: {
    height: "60px"
  },
  cartArea: {
    position: "relative"
  },
  cartItemCount: {
    position: "absolute",
    color: "white",
    top: "1px",
    right: "5px"
  },
  cartIcon: {
    width: "45px"
  },
  cart: {},
  cartTitle: {
    color: "#999999",
    borderBottom: "1px solid #262828",
    padding: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.2px"
  },
  cartItem: {
    padding: "10px",
    borderBottom: "1px solid"
  },
  itemInfo: {
    display: "flex",
    marginBottom: "10px"
  },
  itemDetail: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  itemTitle: {
    lineHeight: "20px",
    color: "#0EA7E9",
    fontWeight: "200",
    letterSpacing: "0.2px"
  },
  pid: {
    color: "#999999"
  },
  itemImg: {
    width: "80px",
    height: "60px"
  },
  seperateLine: {
    color: "#dddddd"
  },
  actionArea: {
    display: "flex",
    justifyContent: "space-between"
  },
  remove: {
    color: "#02A7E9",
    fontSize: "13.5px",
    lineHeight: "30px",
    fontWeight: "500",
    letterSpacing: "0.3px"
  },
  qty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  qtyText: {
    marginRight: "5px"
  },
  itemPrice: {
    lineHeight: "30px",
    fontWeight: "bold"
  },
  checkOutArea: {
    padding: "20px 10px"
  },
  subtotalArea: {
    justifyContent: "flex-end",
    display: "flex",
    textTransform: "uppercase",
    marginBottom: "20px"
  },
  subtotalText: {
    color: "#999999"
  },
  totelArea: {
    justifyContent: "flex-end",
    display: "flex",
    textTransform: "uppercase",
    marginBottom: "20px",
    fontWeight: "bold"
  },
  price: {
    marginLeft: "75px",
    fontWeight: "bold"
  },
  checkoutButton: {
    textTransform: "uppercase",
    color: "#FFF",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
    backgroundColor: "#01A7E9"
  },
  iconsArea: {
    borderTop: "1px solid",
    margin: "0px 10px",
    paddingTop: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "end"
  },
  paypalIcon: {
    width: "145px"
  },
  amazonIcon: {
    width: "145px"
  }
});

const items = [
  {
    itemImg:
      "https://microjpm.com/_files/system_preview_small_200002352-e5b10e6aa7/3055-06.jpg",
    itemTitle: "Raspberry Pi 3 - Model B - ARMv8 with 1G RAM",
    itemPid: "3055",
    itemPrice: "35.00"
  },
  {
    itemImg:
      "https://cdn.shopify.com/s/files/1/0176/3274/products/1609-00_1024x1024.jpg?v=1479855035",
    itemTitle: "Adafruid Perma-Proto Half-sized Breadboard PCB - Single",
    itemPid: "1609",
    itemPrice: "4.50"
  }
];

function Cart({ classes }) {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img className={classes.menu} src="https://goo.gl/GYJnhY" />
        <img
          className={classes.logo}
          src="https://cdn-learn.adafruit.com/guides/images/000/000/603/medium500/Logo.gif?1447862094"
        />
        <div className={classes.cartArea}>
          <div className={classes.cartItemCount}>4</div>
          <img className={classes.cartIcon} src="https://goo.gl/1vEu7u" />
        </div>
      </div>

      <div className={classes.cart}>
        <div className={classes.cartTitle}>shopping cart</div>

        {items.map(item => (
          <div className={classes.cartItem}>
            <div className={classes.itemInfo}>
              <img className={classes.itemImg} src={item.itemImg} />
              <div className={classes.itemDetail}>
                <div className={classes.itemTitle}>{item.itemTitle}</div>
                <div className={classes.pid}>
                  PID:
                  {item.itemPid}
                </div>
              </div>
            </div>
            <hr className={classes.seperateLine} />
            <div className={classes.actionArea}>
              <div className={classes.remove}>REMOVE</div>
              <div className={classes.qty}>
                <div className={classes.qtyText}>Qty:</div>
                <TextField
                  InputProps={{
                    disableUnderline: true,
                    classes: {
                      root: classes.bootstrapRoot,
                      input: classes.bootstrapInput
                    }
                  }}
                />
              </div>
              <div className={classes.itemPrice}>
                $
                {item.itemPrice}
              </div>
            </div>
          </div>
        ))}

        <div className={classes.checkOutArea}>
          <div className={classes.subtotalArea}>
            <div className={classes.subtotalText}>subtotal</div>
            <div className={classes.price}>$39.50</div>
          </div>
          <div className={classes.totelArea}>
            total (usd)
            <div className={classes.price}>$39.50</div>
          </div>
          <div className={classes.checkoutButton}>
            process to checkout
            {">"}
          </div>
        </div>

        <div className={classes.iconsArea}>
          <img className={classes.paypalIcon} src="https://goo.gl/Zx9kc1" />
          <img
            className={classes.amazonIcon}
            src="https://raw.githubusercontent.com/amzn/amazon-payments-magento-plugin/gh-pages/images/pwa.png"
          />
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(withRouter(Cart));
