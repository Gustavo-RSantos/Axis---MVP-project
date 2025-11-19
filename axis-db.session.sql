-- /* Busca do usuário pelo email*/

-- SELECT user_id, user_mail, user_password_hash FROM cadastros
-- WHERE user_mail = 'email'
-- LIMIT 1;


-- /* Busca do do perfil do usuário*/

-- SELECT c.user_id, p.user_name, p.user_image FROM cadastros AS c
-- JOIN perfis AS p ON c.user_id = p.user_id
-- WHERE c.user_id = payload_user_id;


-- /*  Verificar e Cadastro do novo usuário*/

-- SELECT user_id FROM cadastros
-- WHERE user_mail = 'email@email.com'
-- LIMIT 1;

-- INSERT INTO cadastros (
--   user_firstname, user_secondname, user_mail, user_phone, user_age, user_password_hash
-- ) VALUES (
--   'PrimeiroNome', 'Sobrenome', 'email@teste.com', '999999999', 25, 'hash_da_senha'
-- );


-- /* Busca de dados completos do usuário*/

-- SELECT c.user_firstname, c.user_secondname, c.user_mail, c.user_age, p.user_name, p.user_image FROM cadastros AS c
-- JOIN perfis AS p ON c.user_id = p.user_id
-- WHERE c.user_id = payload_user_id;


-- /* Buscar Usuário pelo ID*/

-- SELECT * FROM cadastros
-- WHERE user_id = payload_user_id;


-- /* Deletar usuário e todos os dados relacionados*/

-- DELETE FROM postagem_comentarios 
-- WHERE user_id = payload_user_id;
-- DELETE FROM postagem_likes 
-- WHERE user_id = payload_user_id;
-- DELETE FROM postagens 
-- WHERE user_id = payload_user_id;
-- DELETE FROM perfis 
-- WHERE user_id = payload_user_id;
-- DELETE FROM cadastros 
-- WHERE user_id = payload_user_id;
-- DELETE FROM artigos_favoritos 
-- WHERE user_id = payload_user_id;


-- /* Busca dos artigos e dos favoritos*/

-- SELECT artigos_id, artigos_gender, artigos_autor, artigos_titulo, artigos_description, artigos_url FROM artigos;

-- SELECT artigos_id FROM artigos_favoritos
-- WHERE user_id = payload.user_id;


-- /* Troca de senha do usuário*/

-- UPDATE cadastros
-- SET user_password_hash = 'hash'
-- WHERE user_id = payload.user_id;


-- /* Atualiza a imagem do perfil do usuário*/

-- UPDATE perfis
-- SET user_image = buffer
-- WHERE user_id = payload.user_id;


-- /*Busca postagens com comentários e likes*/

-- SELECT p.*, c.*, pf.*, pc.*, cc.*, cpf.*, pl.* FROM postagens AS p
-- JOIN cadastros AS c ON p.user_id = c.user_id
-- JOIN perfis AS pf ON c.user_id = pf.user_id
-- LEFT JOIN postagem_comentarios AS pc ON p.post_id = pc.post_id
-- LEFT JOIN cadastros AS cc ON pc.user_id = cc.user_id
-- LEFT JOIN perfis AS cpf ON cc.user_id = cpf.user_id
-- LEFT JOIN postagem_likes AS pl ON p.post_id = pl.post_id
-- ORDER BY p.post_data DESC, pc.comentario_data ASC;


-- /* Criação de nova postagem*/

-- INSERT INTO postagens (
--   user_id, post_name, post_text, post_data, post_image, post_gender
-- ) VALUES (
--   payload.user_id, post_name, post_text, NOW(), imageBuffer, post_gender
-- );


-- /*Busca eventos no calendário*/

-- SELECT calendar_id, calendar_consulta, calendar_data FROM calendarios
-- WHERE user_id = payload.user_id;


-- /*Ecxlusão de evento no calendário*/

-- DELETE FROM calendarios
-- WHERE calendar_id = CAST(calendar_id AS UNSIGNED)
--   AND user_id = payload.user_id;


-- /*Busca dados no calendário*/

-- SELECT calendar_id, calendar_data, calendar_consulta FROM calendarios
-- WHERE user_id = payload.user_id;


-- /*Atualiza dados do usuário e perfil*/

-- UPDATE cadastros
-- SET user_firstname = data.user_firstname,
--     user_secondname = data.user_secondname,
--     user_age = data.user_age
-- WHERE user_id = payload.user_id;

-- UPDATE perfis
-- SET user_name = data.user_name
-- WHERE user_id = payload.user_id;


-- /*Busca dos favoritos com detalhes*/

-- SELECT af.*, a.* FROM artigos_favoritos AS af
-- JOIN artigos AS a ON af.artigos_id = a.artigos_id
-- WHERE af.user_id = payload.user_id;


-- /*Criação do perfil do usuário*/

-- INSERT INTO perfis (user_id, user_name, user_image)
-- VALUES (novoCadastro.user_id, CONCAT('Axis #', novoCadastro.user_id), imagemBytes);


-- /*Busca de imagem do perfil do usuário*/

-- SELECT user_image FROM perfis
-- WHERE user_id = payload.user_id;


-- /* Criação de evento no calendário*/

-- INSERT INTO calendarios (
--   calendar_consulta, calendar_data, user_id
-- ) VALUES (
--   calendar_consulta, parsedDate, payload.user_id
-- );

-- -- Querrys dos de manipulação dos likes de postagens

-- SELECT * FROM postagem_likes
-- WHERE = post_id = postId AND
--         user_id = payload.user_id;

-- -- SE existir

-- DELETE FROM postagem_likes 
-- WHERE id_like = existingLike.id_like;

-- -- SE não existir

-- INSERT INTO postagem_likes (
--   post_id, user_id, data like
-- ) VALUES (
--   postId, payload.user_id, NOW() 
-- );
