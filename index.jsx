import { useState, useEffect, useCallback } from "react";

// ─── CONSTANTS ───────────────────────────────────────────────────────────────
const WAVE_LINK = "https://pay.wave.com/m/M_ci_Z_c9_-3Rcnb7/c/ci/";

const SERVICES = [
  { id: "logo", label: "Création Logo", price: 50000 },
  { id: "affiche", label: "Affiche Publicitaire", price: 35000 },
  { id: "branding", label: "Pack Branding Complet", price: 150000 },
  { id: "cm", label: "Community Management", price: 80000 },
  { id: "social", label: "Gestion Réseaux Sociaux", price: 60000 },
  { id: "strategie", label: "Stratégie Digitale", price: 120000 },
  { id: "contenu", label: "Création de Contenu", price: 45000 },
  { id: "identite", label: "Identité Visuelle Complète", price: 200000 },
];

const INITIAL_PROSPECTS = [
  {
    id: 1,
    name: "Restaurant La Saveur",
    contact: "Chef Kouassi Amos",
    phone: "+225 07 89 45 23",
    platform: "Facebook",
    sector: "Restauration",
    city: "Bouaké",
    scores: { branding: 15, presence: 20, visuel: 10, activite: 30 },
    status: "nouveau",
    interest: 3,
    services: ["logo", "affiche", "cm"],
    notes: "Page Facebook créée en 2020, aucun logo pro, photos floues, 0 stratégie",
    history: ["2026-06-20 : Prospect détecté via analyse Facebook"],
    avatar: "🍽️",
  },
  {
    id: 2,
    name: "Pharmacie Centrale Bouaké",
    contact: "Dr. Traoré Aminata",
    phone: "+225 05 67 34 12",
    platform: "Google Business",
    sector: "Santé",
    city: "Bouaké",
    scores: { branding: 30, presence: 40, visuel: 25, activite: 20 },
    status: "contacté",
    interest: 4,
    services: ["branding", "social"],
    notes: "Logo amateur, fiche Google sans photo, pas de présence Instagram",
    history: [
      "2026-06-18 : Prospect détecté",
      "2026-06-21 : Message WhatsApp envoyé",
    ],
