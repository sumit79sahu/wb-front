"use client"
import FormSection from '@/app/(admin-panel)/_components/formsection'
import Labeler from '@/app/(admin-panel)/_components/labeler'
import { ENDPOINTS } from '@/constants/endpoints'
import { getRequest } from '@/utils/request'
import { Col, Form, message, Row, Select } from 'antd'
import { startTransition, useActionState, useEffect } from 'react'

const UserAccessControlInfo = () => {

     const [roles, getRoles, isPending] =
    useActionState(async () => {
      const roles = await 
        getRequest({
          endpoint: ENDPOINTS.roles,
          credentials: "include",
        })
      if (roles.success) {
        return roles.data;
      } else {
        message.error("Failed to fetch roles");
        return [];
      }
    }, []);


  useEffect(() => {
    startTransition(() => {
      getRoles();
    });
  }, []);
  return (
          <FormSection
          title={"Access Control"}
          withoutCard
          dividerEnd
          description={
            "Assign the related role to the user, Role this is neccessary for them to perform action on this platform."
          }
        >
          <Row gutter={12}>
            <Col span={24}>
              <Form.Item
                name={"role"}
                label={<Labeler title="Role" required={true} />}
                required={false}
                rules={[
                  {
                    required: true,
                    message: "This field is required",
                  },
                ]}
              >
                <Select options={roles.map(({_id,name})=>({label:name,value:_id}))} loading={isPending} />
              </Form.Item>
            </Col>
          </Row>
        </FormSection>
  )
}

export default UserAccessControlInfo
