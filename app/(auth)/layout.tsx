import { Col, Row, Flex } from "antd";
import Link from "next/link";
import LoginAnimation from "./_components/login-animation";

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
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 opacity-90 animate-gradient" />

              <div className="absolute -top-10 -left-10 h-60 w-60 bg-white/20 rounded-full blur-3xl animate-float-slow"></div>
              <div className="absolute bottom-10 right-10 h-72 w-72 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <LoginAnimation />
              </div>
            </div>
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default AuthLayout;
