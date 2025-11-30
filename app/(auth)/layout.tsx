import { Col, Row, Flex, Avatar } from "antd";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Row gutter={[16, 16]} className="h-[100svh]" style={{ margin: 0 }}>
        <Col
          xs={{ span: 24 }}
          md={{ span: 10, offset: 7 }}
          lg={{ span: 9, offset: 0 }}
          className="h-full"
        >
          <Flex vertical justify="space-between" className="h-full">
            <div></div>

            <div className="my-0 mx-auto w-full max-w-[300px]">
              <Flex vertical gap={48}>
                <Flex vertical gap={16}>
                  <Flex vertical gap={4}>
                    <h3 className="font-bold text-[20px] text-black ff-title">
                      Manage inventory with ease
                    </h3>
                    <p className="font-normal text-[14px] text-gray">
                      Less hassle. Increased Productivity.
                    </p>
                  </Flex>
                </Flex>

                {children}

                <p className="font-normal text-[12px] text-gray">
                  By continuing, I agree to the{" "}
                  <Link href="/privacy-policy" target="_blank">
                    privacy policy
                  </Link>
                  ,{" "}
                  <Link href="/cookie-policy" target="_blank">
                    cookie policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" target="_blank">
                    terms and conditions
                  </Link>
                </p>
              </Flex>
            </div>

            <div className="mb-24">
              <p className="text-center text-gray text-[14px]">
                In case of any query, reach out to
                <br />
                <a href="mailto:vibe@tykkit.com" target="_blank">
                  sumit79sahu@gmail.com
                </a>
              </p>
            </div>
          </Flex>
        </Col>

        <Col xs={0} sm={0} md={0} lg={{ span: 15 }}>
          <Flex
            className=" bg-[#cccfd1] h-full p-[80] w-full"
            vertical
            justify="space-between"
          >
          <div></div>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default AuthLayout;
