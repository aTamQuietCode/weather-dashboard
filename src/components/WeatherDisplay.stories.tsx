import type { Meta, StoryObj } from '@storybook/react';
import { WeatherDisplay } from './WeatherDisplay';
import type { WeatherData } from '../types/weather';

const meta: Meta<typeof WeatherDisplay> = {
  title: 'Components/WeatherDisplay',
  component: WeatherDisplay,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeatherDisplay>;

// Basic common mock data
const baseData:WeatherData = {
    name:"Tokyo",
    main: {
        temp:20,
        humidity:50,
        feels_like:18,
    },
    weather:[{
        main:"Clear",
        description:"快晴",
        icon:"01d",
    }],
    wind:{speed:5},
    sys:{sunrise:1711141200, sunset:1711184400},
    timezone:32400,
};

// 1. Sunny pattern
export const Sunny:Story = {
    args: {
        data:baseData,
    },
};

// 2. Rainy pattern
export const Rainy:Story = {
    args: {
        data: {
            ...baseData,
            weather:[{main:"Rain", description:"小雨", icon:"10d"}],
            main:{...baseData.main, temp:15},
        },
    },
};

// 3. Snow pattern (cold setting)
export const Snowy: Story = {
  args: {
    data: {
      ...baseData,
      weather: [{ main: "Snow", description: "雪", icon: "13d" }],
      main: { ...baseData.main, temp: -2 },
    },
  },
};

// 4. Night pattern
export const Night: Story = {
  args: {
    data: {
      ...baseData,
      weather: [{ main: "Clear", description: "快晴", icon: "01n" }],
    },
  },
};