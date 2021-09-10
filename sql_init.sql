CREATE TABLE article_type(
	article_type_id UUID PRIMARY KEY,
	name VARCHAR(50) UNIQUE NOT null
);


INSERT INTO article_type(article_type_id, name)
VALUES ('d2d8f302-cea6-4208-8e20-8af4e2832236', 'pubmed'), ('8d090aef-33e0-4c90-a9b7-a91084e9213b', 'omim'), ('72feceaf-2ed0-4744-b6d0-bbfbfc7f7a82', 'hgmd');


CREATE TABLE articles(
	id VARCHAR(50) PRIMARY KEY,
	name VARCHAR(255) UNIQUE NOT NULL,
	article_type_id UUID,
	CONSTRAINT fk_articles_article_type
      FOREIGN KEY(article_type_id) 
	  REFERENCES article_type(article_type_id)
);

INSERT INTO articles(id, name, article_type_id)
VALUES ('7683628','Identification of eight novel mutations in a collaborative analysis of a part of the second transmembrane domain of the CFTR gene', 'd2d8f302-cea6-4208-8e20-8af4e2832236'), 
('18456578', 'Consensus on the use and interpretation of cystic fibrosis mutation analysis in clinical practice', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('20021716', 'Cystic fibrosis transmembrane conductance regulator mutations in azoospermic and oligospermic men and their partners', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('22658665', 'Cystic fibrosis transmembrane conductance regulator (CFTR) gene mutations in pancreatitis', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('22975760', 'An empirical estimate of carrier frequencies for 400+ causal Mendelian variants: results from an ethnically diverse clinical sample of 23,453 individuals', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('23891399', 'Effect of ivacaftor on CFTR forms with missense mutations associated with defects in protein processing or function', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('23974870', 'Defining the disease liability of variants in the cystic fibrosis transmembrane conductance regulator gene', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('25087612', 'Pathogenic variants for Mendelian and complex traits in exomes of 6,517 European and African Americans: implications for the return of incidental results', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('27171515', 'Genophenotypic Analysis of Pediatric Patients With Acute Recurrent and Chronic Pancreatitis', 'd2d8f302-cea6-4208-8e20-8af4e2832236'),
('28546993', 'Nationwide genetic analysis for molecularly unresolved cystic fibrosis patients in a multiethnic society: implications for preconception carrier screening', 'd2d8f302-cea6-4208-8e20-8af4e2832236');
