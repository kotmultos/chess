import Joi from 'joi';

export const Validator = Joi.object({
    email: Joi
        .string()
        .min(8)
        .max(30)
        .pattern(new RegExp('[a-zA-Z0-9]+@[a-zA-Z]+\\.[a-zA-Z]{2,5}'))
        .required()
        .trim()
        .messages({
            'string.empty': 'Обов\'язкове поле',
            'string.min': 'Мінімальна кількість символів: 8',
            'string.max': 'Максимальна кількість символів: 30',
            'string.pattern.base': 'Формат: англійські літери та цифри + @ + англійські літери + . + 2-5 англійські літери'
        }),

    password: Joi
        .string()
        .min(8)
        .max(20)
        .pattern(new RegExp('[a-zA-Z0-9]'))
        .trim()
        .required()
        .messages({
            'string.empty': 'Обов\'язкове поле',
            'string.min': 'Мінімальна кількість символів 8',
            'string.max': 'Максимальна кількість символів 20',
            'string.pattern.base': 'Дозволено використання літер англійського алфавіту та цифр'
        }),

    country: Joi.string().required(),

    experience: Joi
        .number()
        .required()
        .min(0)
        .max(70)
        .messages({
            'number.min': 'Мінамальний досвід: 0 років',
            'number.max': 'Максимальний досвід: 70 років'
        }),

    gender: Joi.string().required(),

    about: Joi
        .string()
        .min(0)
        .max(150)
        .messages({
            'string.max': 'Максимально можна ввести до 150 символів'
        })
});