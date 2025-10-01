import { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import {
  TextField,
  Button,
  Switch,
  Text,
  Slider,
  Kbd,
  Badge,
  Heading,
  Em,
  Link,
  HoverCard,
  Avatar,
  Box,
  Flex,
} from "@radix-ui/themes";
import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

function App() {
  const [sliderValue, setSliderValue] = useState([16]);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [splCharAllowed, setSplCharAllowed] = useState(true);
  const [password, setPassword] = useState();
  const [strength, setStrength] = useState();
  const [color, setColor] = useState();

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let passwordChars = letters;
    const numbers = "0123456789";
    const splChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (numberAllowed) passwordChars += numbers;
    if (splCharAllowed) passwordChars += splChars;
    let pass = "";
    for (let i = 0; i < sliderValue; i++) {
      const randomChar = passwordChars.charAt(
        Math.floor(Math.random() * passwordChars.length + 1)
      );
      pass += randomChar;
    }
    setPassword(pass);
    if (sliderValue < 4) {
      setStrength("Very Weak");
      setColor("red");
    } else if (sliderValue >= 4 && sliderValue < 7) {
      setStrength("Weak");
      setColor("orange");
    } else if (sliderValue >= 7 && sliderValue < 9) {
      setStrength("Good");
      setColor("yellow");
    } else if (sliderValue >= 9 && sliderValue < 11) {
      setStrength("Strong");
      setColor("grass");
    } else {
      setStrength("Very Strong");
      setColor("green");
    }
  }, [sliderValue, numberAllowed, splCharAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    passwordGenerator();
  }, [sliderValue, numberAllowed, splCharAllowed]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="mb-25">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Heading size="9" className="">
              PassCore
            </Heading>
          </HoverCard.Trigger>
          <HoverCard.Content maxWidth="350px">
            <Flex gap="4">
              <Avatar
                size="3"
                fallback="AD"
                radius="full"
                src="/public/amandey.jpg"
              />
              <Box>
                <Heading size="3" as="h3">
                  PassCore
                </Heading>
                <Text as="div" size="2" color="gray" mb="2">
                  @pass-core
                </Text>
                <Text as="div" size="2">
                  A modern, lightweight password generator built with React and
                  Radix UI. Generate secure passwords with customizable length
                  and toggle numbers / special characters.
                </Text>
              </Box>
            </Flex>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <div className="h-80 w-2xl rounded-xl border-gray-700 border-2 flex flex-col justify-center items-center">
        <div className="flex items-center">
          <TextField.Root
            size="3"
            value={password}
            className="m-5 w-sm"
            readOnly
            ref={passwordRef}
          >
            <TextField.Slot side="right" px="1">
              <Button size="2" onClick={copyPasswordToClipboard}>
                Copy
              </Button>
            </TextField.Slot>
          </TextField.Root>

          <Button variant="surface">
            <ReloadIcon onClick={passwordGenerator} className="h-5 w-5" />
          </Button>
        </div>

        <div className="w-xs flex self-auto">
          <Text as="label" size="3" className="pr-3 w-40">
            Length :{" "}
            <Kbd size="5" className="w-7">
              {sliderValue}
            </Kbd>
          </Text>

          <Slider
            variant="soft"
            size={3}
            value={sliderValue}
            onValueChange={setSliderValue}
            min={1}
            max={50}
            className="mt-2"
          ></Slider>
        </div>

        <div className="flex self-baseline ml-50 mb-3 mt-3">
          <Text as="label" size="3">
            <Switch
              checked={numberAllowed}
              onCheckedChange={(current) => setNumberAllowed(current)}
            />{" "}
            Numbers
          </Text>
        </div>

        <div className="flex self-baseline ml-50 mb-3">
          <Text as="label" size="3" className="">
            <Switch
              checked={splCharAllowed}
              onCheckedChange={(current) => setSplCharAllowed(current)}
            />{" "}
            Special Characters
          </Text>
        </div>

        <div>
          <Badge color={color} size="3">
            {strength}
          </Badge>
        </div>
      </div>
      <Text className="pt-20">
        Made with ❤️ by{" "}
        <Link href="https://github.com/4M4ND3Y">
          <Em>Aman Dey</Em>
        </Link>
      </Text>
    </div>
  );
}

export default App;
