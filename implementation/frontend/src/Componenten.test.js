import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Server_Connection from '../src/components/Server_Connection.js';
import TCP_Connection from "./components/TCP_Connection.js";
import Lokal_Connection from "./components/Lokal_Connection";
import Einzahlung from "./components/Einzahlung";
import Auszahlung from "./components/Auszahlung";
import TopicLogin from "./components/TopicLogin";

test('renders the correct question in the component Server_Connection', () => {
    render(
        <BrowserRouter>  {/* Um die Komponente in einem Router zu rendern */}
            <Server_Connection />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/Soll der locale Server für das Kassensystem verwendet werden?/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders the correct sentence in the component TCP_Connection', () => {
    render(
        <BrowserRouter>  {/* Um die Komponente in einem Router zu rendern */}
            <TCP_Connection />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/Starten Sie bitte den Server auf dem anderen Rechner./i);
    expect(linkElement).toBeInTheDocument();
});

test('renders the correct sentence in the component Lokal_Connection', () => {
    render(
        <BrowserRouter>  {/* Um die Komponente in einem Router zu rendern */}
            <Lokal_Connection />
        </BrowserRouter>
    );
    const linkElement = screen.getByText(/Starte bitte den Server/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders the correct signal words on the buttons in the component Einzahlung', () => {
    render(
        <BrowserRouter>  {/* Um die Komponente in einem Router zu rendern */}
            <Einzahlung />
        </BrowserRouter>
    );
    const buttonEinzahlen = screen.getByText(/einzahlen/i);
    const buttonAbbrechen = screen.getByText(/abbrechen/i);
    expect(buttonEinzahlen).toBeInTheDocument();
    expect(buttonAbbrechen).toBeInTheDocument();
});

test('renders the correct signal words on the buttons in the component Auszahlung', () => {
    render(
        <BrowserRouter>  {/* Um die Komponente in einem Router zu rendern */}
            <Auszahlung />
        </BrowserRouter>
    );
    const buttonAuszahlen = screen.getByText(/auszahlen/i);
    const buttonAbbrechen = screen.getByText(/abbrechen/i);
    expect(buttonAuszahlen).toBeInTheDocument();
    expect(buttonAbbrechen).toBeInTheDocument();
});

test('renders the correct signal words on the buttons in the component TCP_Connection', () => {
    render(
        <BrowserRouter>
            <TCP_Connection />
        </BrowserRouter>
    );
    const buttonOk = screen.getByText(/ok/i);
    const buttonAbbrechen = screen.getByText(/abbrechen/i);
    expect(buttonOk).toBeInTheDocument();
    expect(buttonAbbrechen).toBeInTheDocument();
});

test('renders the correct signal words on the buttons in the component Lokal_Connection', () => {
    render(
        <BrowserRouter>
            <Lokal_Connection />
        </BrowserRouter>
    );
    const buttonOk = screen.getByText(/ok/i);
    const buttonAbbrechen = screen.getByText(/abbrechen/i);
    expect(buttonOk).toBeInTheDocument();
    expect(buttonAbbrechen).toBeInTheDocument();
});

test('renders the correct topic in the component TopicLogin', () => {
    render(
        <BrowserRouter>
            <TopicLogin />
        </BrowserRouter>
    );
    const topic = screen.getByText(/Passwort/i);
    expect(topic).toBeInTheDocument();
});



