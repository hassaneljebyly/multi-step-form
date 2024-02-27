import arcadeSVG from './assets/images/icon-arcade.svg';
import advancedSVG from './assets/images/icon-advanced.svg';
import proSVG from './assets/images/icon-pro.svg';

const content = [null, { title: 'personal info', description: 'please provide your name, email address, and phone number' }, { title: 'select your plan', description: 'you have the option of monthly or yearly' }, { title: 'pick add-ons', description: 'add-ons help enhance your gaming experience' }, { title: 'finishing up', description: 'double-check everything looks Ok before' }];
const checkBox = [
  { id: 'onlineServices', label: 'online services', description: 'access to multiplayer games' },
  { id: 'largerStorage', label: 'larger storage', description: 'extra 1TB of cloud save' },
  { id: 'customizableProfile', label: 'customizable profile', description: 'custom theme on your profile' },
];

const textInputs = [
  { id: 'nameInput', label: 'name', type: 'text', placeHolder: 'e.g. Stephen King' },
  { id: 'emailInput', label: 'email-address', type: 'text', placeHolder: 'e.g. stephenking@lorem.com' },
  { id: 'phoneInput', label: 'phone-number', type: 'number', placeHolder: 'e.g. +1 234 567 890' },
];
const radioInputs = [
  { id: 'arcade', icon: arcadeSVG },
  { id: 'advanced', icon: advancedSVG },
  { id: 'pro', icon: proSVG },
];

const steps = [
  { id: 1, title: 'your info' },
  { id: 2, title: 'select plan' },
  { id: 3, title: 'add-ons' },
  { id: 4, title: 'summary' },
];

const initialFormValues = {
  currentStep: 1,
  nameInput: '',
  emailInput: '',
  phoneInput: '',
  plan: 'arcade',
  planPrices: {
    arcade: [9, 90],
    advanced: [12, 120],
    pro: [15, 150],
  },
  AddOnsPrices: {
    onlineServices: [1, 10],
    largerStorage: [2, 20],
    customizableProfile: [2, 20],
  },
  selectedAddOns: {
    onlineServices: true,
    largerStorage: true,
    customizableProfile: false,
  },
  billingCycle: 'monthly',
  textFieldErrors: null,
};

export { content, checkBox, textInputs, radioInputs, steps, initialFormValues };
