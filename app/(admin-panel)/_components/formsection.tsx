import React from "react";
import { Card, Row, Col, Divider } from "antd";

interface FormSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;

  columns?: [number?, number?, number?];

  dividerStart?: boolean;
  dividerEnd?: boolean;

  withoutCard?: boolean;
  custom?: boolean;

  extraContent?: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
  columns,
  dividerStart = false,
  dividerEnd = false,
  withoutCard = false,
  custom = false,
  extraContent,
}) => {
  const titleCol = columns?.[0] ?? 6;
  const contentCol = columns?.[1] ?? (custom ? 12 : 10);
  const extraCol = columns?.[2];

  return (
    <>
      {dividerStart && <Divider />}

      <Row gutter={[24, 24]} style={{ paddingTop: 12, paddingBottom: 12 }}>
        <Col lg={{ span: titleCol }} xs={{ span: 24 }}>
          {title && (
            <div style={{ fontSize: 14, fontWeight: 600 }}>{title}</div>
          )}
          {description && <div style={{ color: "#666" }}>{description}</div>}
        </Col>

        <Col lg={{ span: contentCol }} xs={{ span: 24 }}>
          {withoutCard ? children : <Card>{children}</Card>}
        </Col>

        {extraCol ? (
          <Col lg={{ span: extraCol }} xs={{ span: 24 }}>
            {extraContent}
          </Col>
        ) : null}
      </Row>

      {dividerEnd && <Divider />}
    </>
  );
};

export default FormSection;
