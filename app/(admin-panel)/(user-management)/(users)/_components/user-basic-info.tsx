"use client"
import FormSection from '@/app/(admin-panel)/_components/formsection'
import Labeler from '@/app/(admin-panel)/_components/labeler'
import { Col, Form, Input, Row } from 'antd'
const UserBasicInfo = () => {
  return (
       <FormSection
          title={"Basic Information"}
          withoutCard
          dividerEnd
          description={"Enter the basic information of a user"}
        >
          <Row gutter={12}>
            <Col span={24}>
              <Form.Item
                name={"email"}
                required={false}
                label={<Labeler title="Email" required={true} />}
                rules={[
                  { type: "email", message: "invalid email" },

                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"first_name"}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
                required={false}
                label={<Labeler title="First Name" required={true} />}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={"last_name"}
                label={<Labeler title="Last Name" required={true} />}
                required={false}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </FormSection>
  )
}

export default UserBasicInfo
