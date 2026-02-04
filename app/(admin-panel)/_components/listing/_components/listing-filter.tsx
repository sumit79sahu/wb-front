import { IconFilter, IconX } from "@tabler/icons-react";
import { Button, Card, Flex, Form, Input, Popover, Select, Tag } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
import { useEffect, useState } from "react";

type FilterItem = {
  field: string;
  condition: string;
  value: string;
};

const ListingFilter = ({
  filters,
  setFilter,
  loading,
}: {
  loading: boolean;
  setFilter: (flt: string[]) => void;
  filters: {
    name: string;
    identifier: string;
    allowedFilters: {
      id: string;
      name: string;
      valueField: string;
    }[];
  }[];
}) => {
  const [form] = useForm();
  const watchedFilters = useWatch("filters", form) || [];
  const [flt, setFlt] = useState<FilterItem[]>([]);

  useEffect(() => {
    if (!form.getFieldValue("filters")) {
      form.setFieldsValue({ filters: [{}] });
    }
  }, [form]);

  const buildQuery = (filters: FilterItem[]) => {
    return Array.from(
      new Set(
        filters.map(
          ({ field, condition, value }) =>
            `filters[${field}][${condition.split(" ")[0]}]=${value}`,
        ),
      ),
    );
  };

  const handleApply = (values: { filters: FilterItem[] }) => {
    const uniqueFilters = Array.from(
      new Map(
        values.filters.map((f) => [`${f.field}_${f.condition}_${f.value}`, f]),
      ).values(),
    );

    setFlt(uniqueFilters);
    setFilter(buildQuery(uniqueFilters));
  };

  const handleRemoveTag = (index: number) => {
    const updated = flt.filter((_, i) => i !== index);

    setFlt(updated);
    setFilter(buildQuery(updated));

    form.setFieldsValue({
      filters: updated.length ? updated : [{}],
    });
  };

  const handleClear = () => {
    form.resetFields();
    setFlt([]);
    setFilter([]);
    form.setFieldsValue({ filters: [{}] });
  };

  return (
    <Card size="small" className="!mb-[20px]">
      <Flex justify="space-between" align="center">
        <Popover
          placement="bottomLeft"
          trigger="click"
          content={
            <Form form={form} onFinish={handleApply}>
              <Form.List name="filters">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...rest }) => {
                      const condition =
                        watchedFilters?.[name]?.condition || "$eq text";
                      const [, valueField] = condition.split(" ");

                      return (
                        <Flex key={key} gap={10} align="center">
                          <Form.Item
                            {...rest}
                            name={[name, "field"]}
                            rules={[{ required: true }]}
                          >
                            <Select
                              placeholder="Field"
                              disabled={loading}
                              className="!w-[160px]"
                              options={filters.map((f) => ({
                                label: f.name,
                                value: f.identifier,
                              }))}
                            />
                          </Form.Item>

                          <Form.Item
                            {...rest}
                            name={[name, "condition"]}
                            rules={[{ required: true }]}
                          >
                            <Select
                              placeholder="Condition"
                              disabled={loading}
                              className="!w-[160px]"
                              options={
                                filters
                                  .find(
                                    (f) =>
                                      f.identifier ===
                                      watchedFilters?.[name]?.field,
                                  )
                                  ?.allowedFilters.map((c) => ({
                                    label: c.name,
                                    value: `${c.id} ${c.valueField}`,
                                  })) || []
                              }
                            />
                          </Form.Item>

                          <Form.Item
                            {...rest}
                            name={[name, "value"]}
                            rules={[{ required: true }]}
                          >
                            {valueField === "number" ? (
                              <Input
                                type="number"
                                disabled={loading}
                                placeholder="Enter number"
                              />
                            ) : (
                              <Input
                                disabled={loading}
                                placeholder="Enter value"
                              />
                            )}
                          </Form.Item>

                          {fields.length > 1 && (
                            <Form.Item>
                              <Button
                                type="text"
                                onClick={() => remove(name)}
                                icon={<IconX size={18} />}
                              />
                            </Form.Item>
                          )}
                        </Flex>
                      );
                    })}

                    <Flex justify="space-between">
                      <Button
                        type="link"
                        disabled={loading}
                        onClick={() => add({})}
                      >
                        Add Filter
                      </Button>

                      <Flex gap={10}>
                        <Button onClick={handleClear} disabled={loading}>
                          Clear Filter
                        </Button>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={loading}
                        >
                          Apply Filter
                        </Button>
                      </Flex>
                    </Flex>
                  </>
                )}
              </Form.List>
            </Form>
          }
        >
          <Button icon={<IconFilter size={18} />}>Filter</Button>
        </Popover>
      </Flex>

      <Flex gap={10} className="!mt-[15px]">
        {flt.map(({ field, value }, index) => (
          <Tag
            key={index}
            closable
            disabled={loading}
            onClose={() => handleRemoveTag(index)}
          >
            <strong className="capitalize">
              {field?.split(".")?.[1]?.replace("_", " ")}
            </strong>
            <div>{value}</div>
          </Tag>
        ))}
      </Flex>
    </Card>
  );
};

export default ListingFilter;
