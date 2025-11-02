import React from 'react';
import { PROFILES } from '../config/familyConfig';

function ProfileSelector({ onSelect }) {
  return (
    <div className="profile-selector">
      <div className="profile-container">
        <h1 className="app-title">🛒 Compras da Família</h1>
        <p className="app-subtitle">Escolha seu perfil para começar</p>

        <div className="profile-buttons">
          <button
            className="profile-btn family-btn"
            onClick={() => onSelect(PROFILES.FAMILY)}
          >
            <span className="profile-icon">👨‍👩‍👧‍👦</span>
            <span className="profile-name">Família</span>
            <span className="profile-desc">Aprovar contas e ver divisão</span>
          </button>

          <button
            className="profile-btn caregiver-btn"
            onClick={() => onSelect(PROFILES.CAREGIVER)}
          >
            <span className="profile-icon">💼</span>
            <span className="profile-name">Cuidadora</span>
            <span className="profile-desc">Cadastrar despesas</span>
          </button>
        </div>

        <p className="profile-footer">
          Feito com carinho para Dona Judith e família 💛
        </p>
      </div>
    </div>
  );
}

export default ProfileSelector;
