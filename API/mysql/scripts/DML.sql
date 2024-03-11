-- Selecionando banco de dados
USE ortoclinica;

-- Alimentando tabela de médicos
INSERT INTO medicos (nome, estrelas, img_url, preco) VALUES 
('Dr. Keniti', 4.8, '/assets/medico1.png', 25.00),
('Dr. Strain', 3.0, '/assets/medico2.png', 22.00),
('Dr. Lachinet', 4.2, '/assets/medico3.png', 29.00),
('Dra. Crick', 3.8, '/assets/medico4.png', 30.00);