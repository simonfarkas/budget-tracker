import { Button, Flex, Input, Select } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  onSubmit: (e: any) => any;
  setInputType: (e: any) => any;
  setName: (e: any) => any;
  setValue: (e: any) => any;
  inputType: any;
  name: string;
  value: number;
}

export const Form: FC<Props> = ({
  onSubmit,
  setInputType,
  setName,
  setValue,
  inputType,
  name,
  value,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <Flex
        direction="row"
        justify="center"
        mt={10}
        experimental_spaceX={{ base: 1, md: 2 }}
      >
        <Select
          width={20}
          value={inputType}
          onChange={(e: any) => setInputType(e.target.value)}
        >
          <option value="Income">+</option>
          <option value="Expense">-</option>
        </Select>
        <Input
          id="number"
          type="number"
          placeholder="Value"
          name="value"
          width="25%"
          onChange={(e) => setValue(parseInt(e.target.value))}
          value={value}
        />
        <Input
          id="input"
          type="text"
          placeholder="Name"
          name="name"
          width="25%"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button colorScheme="green" type="submit">
          Add
        </Button>
      </Flex>
    </form>
  );
};
