import * as yup from "yup";

export const ProjectSchema = yup.object().shape({
    name: yup.string()
        .required("Tytuł jest wymagany!"),
    description: yup.string()
        .required("Opis jest wymagany!"),
    date: yup.date()
        .required("Data jest wymagana!")
        .nullable()
        .transform((curr, orig) => orig === '' ? null : curr),
    image: yup.mixed()
        .test('required', "Musisz dodać zdjęcie", (value) =>{
        return value && value.length
        } )
        .test("fileSize", "Plik jest za duzy", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
        })
        .test("type", "Zły format pliku", function (value) {
        return value && value[0] && value[0].type === "image/jpeg" || "image/png";
        }),
});

const phoneRegExp = /^([0-9]{9})$/;

export const ContactSchema = yup.object().shape({
    name: yup.string()
        .required("Imię i nazwisko jest wymagane!"),
    email: yup.string()
        .email("Nieprawidłowy email!")
        .required("Email jest wymagany!"),
    phone: yup.string()
        .matches(phoneRegExp, 'Nieprawidłowy numer telefonu!')
        .required(),
    msg: yup.string()
        .required("Wiadomość jest wymagana!"),
  }).required();

  export const ImageSchema = yup.object().shape({
    image: yup.mixed()
    .test('required', "Musisz dodać zdjęcie", (value) =>{
    return value && value.length
    } )
    .test("fileSize", "Plik jest za duzy", (value, context) => {
    return value && value[0] && value[0].size <= 200000;
    })
    .test("type", "Zły format pliku", function (value) {
    return value && value[0] && value[0].type === "image/jpeg" || "image/png";
    }),
  })