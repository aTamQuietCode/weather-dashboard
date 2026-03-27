import type { Meta, StoryObj } from "@storybook/react-vite";
import { Clock } from "./Clock";

const meta:Meta<typeof Clock> = {
    title: "Components/Clock",
    component:Clock,
    tags:["autodocs"],  // Automatically generates documentation (instructions on how to use it.)
};

export default meta;
type Story = StoryObj<typeof Clock>;

// Display patterns for Japan (Tokyo)
export const Tokyo:Story = {
    args: {
        timezoneOffset:32400,
    },
};

// Display patterns for London(UTC)
export const London:Story ={
    args: {
        timezoneOffset: 0,
    },
};

// Display pattern for NewYork (minus timezone)
export const NewYork:Story = {
    args: {
        timezoneOffset: -18000,
    },
};