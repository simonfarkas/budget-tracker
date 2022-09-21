import React, { useState } from "react";
import { AddItem } from "./components/AddItem";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Input,
  Select,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

function App() {
  const [expenses, setExpenses] = useState<any>([]);
  const [incomes, setIncomes] = useState<any>([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [inputType, setInputType] = useState("Income");
  const [budget, setBudget] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const onSubmit = (e: any) => {
    e.preventDefault();

    const newItem = {
      id: new Date().getTime(),
      name: name,
      value: value,
      type: inputType,
    };

    if (name && name.length < 15 && value > 0 && inputType) {
      if (inputType === "Income") {
        setIncomes([...incomes, newItem]);
        setBudget((prevState) => prevState + value);
        setTotalIncomes((prevState) => prevState + value);
      }

      if (inputType === "Expense") {
        setExpenses([...expenses, newItem]);
        setBudget((prevState) => prevState - value);
        setTotalExpenses((prevState) => prevState + value);
      }

      setName("");
      setValue(0);
      setInputType("Income");
    }
  };

  return (
    <Container maxW="5xl" marginY={10}>
      <Text fontSize="36px">Budget Tracker</Text>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <GridItem w="100%" p={4} bg="gray.200" rounded="md">
            <Text>Budget: {budget} €</Text>
          </GridItem>
          <GridItem w="100%" p={4} bg="green.300" rounded="md">
            <Text>Total incomes: {totalIncomes} €</Text>
          </GridItem>
          <GridItem w="100%" p={4} bg="red.300" rounded="md">
            <Text>Total expenses: {totalExpenses} €</Text>
          </GridItem>
        </SimpleGrid>
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

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          fontSize={{
            base: "md",
            sm: "lg",
            lg: "xl",
          }}
          mt={20}
          experimental_spaceY={{ base: 10, md: 0 }}
        >
          <Flex direction="column">
            <Text color="red.500">EXPENSES</Text>
            <Flex direction="column" marginTop={4}>
              {expenses.map(({ id, name, value }: any) => (
                <Flex
                  direction="row"
                  align="center"
                  justifyContent="space-between"
                  key={id}
                  experimental_spaceX={16}
                  fontSize={{
                    base: "sm",
                    sm: "md",
                    lg: "lg",
                  }}
                >
                  <Flex direction="column" alignItems="center">
                    <Text>{name}</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text>- {value} €</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex direction="column">
            <Text color="green.500">INCOMES</Text>
            <Flex direction="column" marginTop={4}>
              {incomes.map(({ id, name, value }: any) => (
                <Flex
                  direction="row"
                  justifyContent="space-between"
                  key={id}
                  experimental_spaceX={16}
                  fontSize={{
                    base: "sm",
                    sm: "md",
                    lg: "lg",
                  }}
                >
                  <Flex direction="column" alignItems="center">
                    <Text>{name}</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text>+ {value} €</Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default App;
