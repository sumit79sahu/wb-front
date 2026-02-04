import FormSection from "@/app/(admin-panel)/_components/formsection";
import { Col, DatePicker, Form, Radio, Row } from "antd";
const UserAdditionalInformation = () => {
  return (
    <FormSection
      title={"Additional Information"}
      withoutCard
      dividerEnd
      description={"Other information related to user, such as date of birth"}
    >
      <Row gutter={12}>
        <Col xs={24} md={12}>
          <Form.Item name="dob" label="Date of birth" >
            <DatePicker className="w-full"/>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="gender"
            label="Gender"

          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </FormSection>
  );
};

export default UserAdditionalInformation;
