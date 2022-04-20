import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../utils/useStore";
import { Col, Row, Typography } from "antd";
import { ListBank } from "./Component";
import spark from "../../assets/images/icon-sparkles.svg";
import eBank from "../../assets/images/icon-banking.svg";
import eWallet from "../../assets/images/icon-ewallet.svg";
import eCommerce from "../../assets/images/icon-ecommerce.svg"
import employee from "../../assets/images/icon-employeeAcc.svg"
import { PageLogin } from "../../component/Layouts/PageLogin";

export const BankList = observer(() => {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [dataBank, setDataBank] = useState([]);

  useEffect(() => {
    loadInitial();
  }, []);

  const loadInitial = async () => {
    try {
      setLoading(true);
      const res = await store.listBank.getAllBanks(
          localStorage.getItem('customer_ref_id'),
          localStorage.getItem('userID'),
          localStorage.getItem('type')
      );
      setDataBank(res.body.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const appImage = (data) => {
    switch (data) {
      case "User's Choices":
        return spark;
      case "Internet Banking":
        return eBank;
      case "E-Wallet":
        return eWallet;
      case "E-Commerce":
          return eCommerce
      case "Employment Accounts":
          return employee
    }
  };

  const data = dataBank.map((it) => {
    return {
      ...it,
      image: appImage(it.name),
    };
  });

  return (
    <PageLogin>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
          <div style={{display: "flex", marginBottom: '20px'}}>
            <Row>
              <Col span={24}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "4vh",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                    }}
                  >
                    <Typography.Paragraph
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: 20,
                        marginLeft: 5,
                        fontWeight: 600,
                        color: "#413d3e",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <span style={{ color: "#FE6601" }}>Connect&nbsp;</span>Your
                        Account.
                      </div>
                    </Typography.Paragraph>
                  </div>
                </div>
              </Col>
                <Col span={24}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                        }}
                    >
                        <Typography.Paragraph
                            style={{
                                margin: 0,
                                padding: 0,
                                fontSize: 12,
                                marginLeft: 5,
                                color: "#121014",
                                width: 290,
                            }}
                        >
                            Choose on of institutions to connect your account to Trustlink.
                        </Typography.Paragraph>
                    </div>
                </Col>
            </Row>
          </div>
          <ListBank data={data} />
        </div>
    </PageLogin>
  );
});
