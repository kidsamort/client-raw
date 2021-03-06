import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { allIcon } from '../icon/icon';

export enum InputType {}

export interface InputProps {
	icon?: keyof typeof allIcon;
	iconRight?: keyof typeof allIcon;
	rightActive?: boolean;
	children?: ReactNode;
}

export interface InputComponentProps
	extends InputProps,
		ComponentPropsWithoutRef<'input'> {}
