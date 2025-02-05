-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema potpiette
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema potpiette
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `potpiette` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `potpiette` ;

-- -----------------------------------------------------
-- Table `potpiette`.`recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`recipe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  `nb_parts` INT NOT NULL,
  `is_published` TINYINT NOT NULL DEFAULT '0',
  `time_to_cook` INT NOT NULL,
  `preparation_time` INT NOT NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `potpiette`.`user` (`id`) ON DELETE SET NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO recipe (title, picture, nb_parts, is_published, time_to_cook, preparation_time, user_id)
VALUES
('Le hamburger Maison', 'https://media.istockphoto.com/id/1498243668/fr/photo/cheeseburger-savoureux-avec-laitue-fromage-cheddar-tomate-et-cornichons-petit-pain-burger-aux.jpg?s=612x612&w=0&k=20&c=CbU_yIAqD1cIG5P0x6TFjpoHMDEPcllouQQAMf3xdgY=', 1, 0, 10, 45, 1),
('Le hot dog New Yorkais', 'https://media.istockphoto.com/id/899411524/fr/photo/cc-kraft2-gameday.jpg?s=612x612&w=0&k=20&c=4f7nGlMGTusykjHUn1Fc04ZCin6iv6Oyik8X7Qm34f4=', 1, 0, 5, 10, 2);

-- -----------------------------------------------------
-- Table `potpiette`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `age` INT NULL DEFAULT NULL,
  `genre` VARCHAR(20) NULL DEFAULT NULL,
  `picture` VARCHAR(100) NULL DEFAULT NULL,
  `inscription_date` DATE NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` TINYINT NOT NULL DEFAULT '0',
  `is_modo` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO user (name, age, genre, picture, inscription_date, email, password, is_admin, is_modo)
VALUES
('Vito', 42, 'homme', 'vito.jpg', CURDATE(), 'viriato.ferreira44@gmail.com', '$argon2id$v=19$m=16,t=2,p=1$bEw3dkNYaWdNZVE3T1FSeQ$TwfjC09TeNpmtZl2va/KAQ', 1, 1),
('Jean', 27, 'homme', 'jean.jpg', CURDATE(), 'jean@gmail.com', 'jaimelesucre', 0, 0),
('Mireille', 32, 'femme', 'mireille.jpg', CURDATE(), 'mireille@gmail.com', 'jaimepaslesucre', 0, 0),
('Camille', 35, 'femme', 'camille.jpg', CURDATE(), 'camille@gmail.com', 'VeGanForEver', 0, 0);

-- -----------------------------------------------------
-- Table `potpiette`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `content` TINYTEXT NOT NULL,
  `status` TINYINT NOT NULL DEFAULT '0',
  `user_id` INT NOT NULL,
  `recipe_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `recipe_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `fk_com_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `potpiette`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`ingredient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_ingredient` VARCHAR(50) NOT NULL,
  `picture_ingredient` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Preload data ingredient
-- -----------------------------------------------------

INSERT INTO ingredient (name_ingredient, picture_ingredient)
VALUES
("Moutarde", "https://media.istockphoto.com/id/185061747/fr/photo/moutarde.jpg?s=612x612&w=0&k=20&c=TUxgnQuo-yTeCNhpHnZ8B2_5L3flmvJsxPGFeb8XdFM="),
("Tomate", "https://media.istockphoto.com/id/1213540028/fr/photo/tomate.jpg?s=612x612&w=0&k=20&c=soLpwFXnP6VDQnlV4l7fzPLQ6ITTfOneKEVFFwhwl8M="),
("Oignon", "https://media.istockphoto.com/id/513920379/fr/photo/les-ampoules-%C3%A0-loignon.jpg?s=612x612&w=0&k=20&c=RCQzUlr1dwCfjBjk7IYsCUtfPnp83LSIO-VWKDvN37s="),
("Pain pour hamburger", "https://media.istockphoto.com/id/962108700/fr/photo/pain-%C3%A0-hamburger-isol%C3%A9-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=Nn7qIDdlXVTouKBzdErKvqWSLkLOBHUA4_HsUGwW0bY="),
("Viande hachée", "https://media.istockphoto.com/id/519262312/fr/photo/frais-meanced-de-la-viande.jpg?s=612x612&w=0&k=20&c=iyoplnzu9OHUMxC0OPhrpmJiUFgrdh0UEnmOy1khUu0="),
("Cheddar", "https://media.istockphoto.com/id/685847528/fr/photo/le-fromage-cheddar.jpg?s=612x612&w=0&k=20&c=pwjDlhthjpT3ApgouFTpQyXg5wZVcaGGneq0891tj0k="),
("Salade", "https://media.istockphoto.com/id/1387420863/fr/photo/vue-de-dessus-de-la-laitue-fra%C3%AEche-butterhead-isol%C3%A9e.jpg?s=612x612&w=0&k=20&c=-KGNRSuCDPiiCm12oI9BcGBqfcw9PebOvLDNSaGV0K8="),
("Ketchup", "https://media.istockphoto.com/id/1187153791/fr/photo/ketchup-savoureux-rouge-ou-sauce-tomate-dans-le-bol-disolement-sur-le-fond-blanc.jpg?s=612x612&w=0&k=20&c=dbkTEAyeoOfNf-ezOB5GhiFX5Ii47VBk5_xweMsvEQo="),
("Pain hot dog", "https://media.istockphoto.com/id/1030095390/fr/photo/hot-dog-bun-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=lA2exk7rSv-Li8yo8Tx3SMQl1-W1PtXY9G7ZZ3J3SEo="),
("Œuf", "https://media.istockphoto.com/id/173234780/fr/photo/groupe-de-%C5%93ufs-crus-brun-lune-est-cass%C3%A9-isol%C3%A9-blanc.jpg?s=612x612&w=0&k=20&c=GPyAqB2Y6Z8-VfaFzCSXZNKLUDqLD8y63HM--0Jrx6k="),
("Jambon", "https://media.istockphoto.com/id/488330599/fr/photo/jambon-frais.jpg?s=612x612&w=0&k=20&c=R2PrbgKPYe2tj5Z1SaW1vpKY0sP02OWAvBUk24Bb4fw="),
("Saucisse", "https://media.istockphoto.com/id/170222471/fr/photo/pr%C3%A9par%C3%A9-des-saucisses.jpg?s=612x612&w=0&k=20&c=vTeyeoYYGesCKOi2c2aZUf4l5w7AdAKm990bCOnbs5Q="),
("Cornichon", "https://media.istockphoto.com/id/183891361/fr/photo/le-gherkin-trac%C3%A9-de-d%C3%A9tourage.jpg?s=612x612&w=0&k=20&c=FyDp3d2RXYsz-PlGNgFlOmKj8IjzvNoeGuwAc7HJtqo="),
("Beurre", "https://media.istockphoto.com/id/177834117/fr/photo/beurre-isol%C3%A9-sur-blanc.jpg?s=612x612&w=0&k=20&c=CC_zcV2ZONdekMp2NhbEqSUTs-Sd4gBUoMalTh6aOg0="),
("Lait", "https://media.istockphoto.com/id/1206080627/fr/photo/glace-de-lait.jpg?s=612x612&w=0&k=20&c=Vhqc0hr1WnSeunUDrTkaYJK_1lihNJKJRDogQ6NpR4w="),
("Farine", "https://media.istockphoto.com/id/1135483735/fr/photo/bol-en-bois-de-farine.jpg?s=612x612&w=0&k=20&c=JyeW4Z36-vEpmYW66fOBvUHAR3GyFZDFwGlLpPGMYNY="),
("Sucre", "https://media.istockphoto.com/id/1371245517/fr/photo/sucre-blanc-granul%C3%A9-dans-un-bol-en-bois-isol%C3%A9-sur-fond-blanc-avec-chemin-de-coupe.jpg?s=612x612&w=0&k=20&c=pC2eRPRwm8YD6Uw6C1IyH_kvthHu8prLh2j8nBme1Ns="),
("Sel", "https://media.istockphoto.com/id/1401261418/fr/photo/sel-de-mer-normal-dans-le-bol-en-bois.jpg?s=612x612&w=0&k=20&c=hHMFU6klSnUO6Nc7om48c9imtljoVuK0H22e_yKDalk="),
("Poivre", "https://media.istockphoto.com/id/1301622377/fr/photo/poivre-noir-moulu-dans-un-bol-en-bois-et-grains-de-poivre-sur-un-fond-blanc-disolement-vue.jpg?s=612x612&w=0&k=20&c=9t_wrB2hQUkDiP8uoXdzOItEd8GppicMqVgAiWOQDtw="),
("Huile d'olive", "https://media.istockphoto.com/id/1341249523/fr/photo/huile-dolive-extra-vierge-sur-blanc.jpg?s=612x612&w=0&k=20&c=uCR-5teQJfDawEeykXZS2_OMsTIW9SJ4F3QuOBRLXAo="),
("Pomme de terre", "https://media.istockphoto.com/id/157430678/fr/photo/trois-pommes-de-terre.jpg?s=612x612&w=0&k=20&c=etLEZ61J8JgAyhEMgB_2a9luEMJIddF0_4RqONuMpPc="),
("Carotte", "https://media.istockphoto.com/id/1388403435/fr/photo/carottes-fra%C3%AEches-disolement-sur-le-fond-blanc.jpg?s=612x612&w=0&k=20&c=md4a1dGqaydqWYy0wEdRfE9yxw-Sk0sOG9W4FL6hR_4="),
("Poulet", "https://media.istockphoto.com/id/172916013/fr/photo/poulet-r%C3%B4ti.jpg?s=612x612&w=0&k=20&c=EPgSc8ep8U4oaXXV0gSqaEzXW2bXpmFYOElEdDooc_c="),
("Poisson", "https://media.istockphoto.com/id/119753555/fr/photo/trois-filet-de-bar.jpg?s=612x612&w=0&k=20&c=MPy1SBFzQRxUVYQ57IqWMpN467QScSgiAzjcjQ8JJg4="),
("Crème fraîche", "https://media.istockphoto.com/id/1135483731/fr/photo/cr%C3%A8me-sure-ou-yaourt-dans-un-bol-en-bois.jpg?s=612x612&w=0&k=20&c=sPbd8UAjvFmR9rJqd0g9MxCqTgyD-hUIhGXoHdnQbqs="),
("Chocolat", "https://media.istockphoto.com/id/924850604/fr/photo/trois-morceaux-de-chocolat-au-lait.jpg?s=612x612&w=0&k=20&c=nX6RncWV0EEqTZ91qAAUCG6tsT_-iPIuOklc_mzAbZM="),
("Vanille", "https://media.istockphoto.com/id/510624822/fr/photo/orchid%C3%A9e-avec-des-gousses-de-vanille.jpg?s=612x612&w=0&k=20&c=rIhCIuo9hzzSV2PQk5ZM8I97a_wS9bG434UgtGQPKuc="),
("Riz", "https://media.istockphoto.com/id/1401261369/fr/photo/riz-brut-blanc.jpg?s=612x612&w=0&k=20&c=GPcwRCe4HJ0AR5X4Ol7_O6OBNmEJ-rgNwuMmS0ukQjs="),
("Pâtes", "https://media.istockphoto.com/id/1096157720/fr/photo/s%C3%A9cher-les-p%C3%A2tes-spaghetti.jpg?s=612x612&w=0&k=20&c=mp9FcrqwrECrkFmFhlEeObSQbIY5HdOu2UAXS2157FA="),
("Champignon", "https://media.istockphoto.com/id/1140162145/fr/photo/agaricus-frais-bisporus-ou-champignons-portobello.jpg?s=612x612&w=0&k=20&c=rYvsx38wkLloxsilSgXLjc_6PZdiygIr6cipBungHPE="),
("Courgette", "https://media.istockphoto.com/id/1149201983/fr/photo/courgettes-enti%C3%A8res-et-tranch%C3%A9es-fra%C3%AEches-isol%C3%A9es-sur-fond-blanc-de-la-vue-de-dessus.jpg?s=612x612&w=0&k=20&c=uYMHRJi1mygpulTt1-pwgu5lNeIEqFw6aSbBp9Bmyz4="),
("Poivron", "https://media.istockphoto.com/id/1138386568/fr/photo/poivrons-rouges-isol%C3%A9s-sur-le-fond-blanc-avec-le-chemin-de-d%C3%A9coupage.jpg?s=612x612&w=0&k=20&c=lv0Reckvl1jgQHSTq1_p5GDXcyPnouOI3TOfMzP9cnA="),
("Ail", "https://media.istockphoto.com/id/499147864/fr/photo/lail.jpg?s=612x612&w=0&k=20&c=R6hgKd2x0EivT_N_mc2o852bKR8DP70SIMzZ1nSY2xA= "),
("Persil", "https://media.istockphoto.com/id/624698704/fr/photo/bouquet-de-persil.jpg?s=612x612&w=0&k=20&c=4oruVHu_Oe-qfEIe0Lc38qA0ywBRDOYghCZOgOjVvNc="),
("Thym", "https://media.istockphoto.com/id/157568691/fr/photo/fresh-thyme-tas-ligot%C3%A9-photo-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=ic-SYSwpJkQXOlxTCIBJCit79ArKOTvT6K8CI3zPVHM="),
("Romarin", "https://media.istockphoto.com/id/695505800/fr/photo/romarin-isol%C3%A9-sur-blanc-renseignements.jpg?s=612x612&w=0&k=20&c=4AXJp3M68c7DfNMzBFr9fTS10CtLDNjyMCC5Bx_rS3Y="),
("Curry", "https://media.istockphoto.com/id/1404442451/fr/photo/poudre-de-curcuma.jpg?s=612x612&w=0&k=20&c=0oLtT2WxynZKxKX-tVFpR-GbY1zyj02EwrJ9Zg-rItI="),
("Paprika", "https://media.istockphoto.com/id/1399805055/fr/photo/bol-de-poudre-de-poivron-rouge.jpg?s=612x612&w=0&k=20&c=OoVP-7EDWQt0ey5QOAiUngvqhynwm0gRpFtin3-4WH0="),
("Miel", "https://media.istockphoto.com/id/950996184/fr/photo/miel.jpg?s=612x612&w=0&k=20&c=elJWElzZsSGEM53KIDKDzd9l7bD9pL6n8xtYz17c5f0="),
("Saumon", "https://media.istockphoto.com/id/187533849/fr/photo/filets-de-saumon.jpg?s=612x612&w=0&k=20&c=B93OSMMPe7yYBMAWskH3u7zFYzYaPbs93j7vJhKslIs="),
("Crevette", "https://media.istockphoto.com/id/464298503/fr/photo/grosses-crevettes.jpg?s=612x612&w=0&k=20&c=K1FuIAB-b5YbMKroxuxLDNU-gjytAPuaizgwTOGfp-I="),
("Fromage râpé", "https://media.istockphoto.com/id/165051217/fr/photo/bol-en-bois-avec-fromage-r%C3%A2p%C3%A9.jpg?s=612x612&w=0&k=20&c=Z_6WSq-yOO5vO4uZl7982Hph70z6f3I453pysiBDT8k="),
("Yaourt", "https://media.istockphoto.com/id/519963596/fr/photo/yaourt.jpg?s=612x612&w=0&k=20&c=vJgUOFg8SQYT6MSCPQiIxihDesQiA5wDWP_LtDOMkKQ="),
("Citron", "https://media.istockphoto.com/id/466175634/fr/photo/citron-fruits-avec-demi-et-feuilles-isol%C3%A9-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=awjB58x1Rnmo7rO4OeBNfLl3P27MA953SLFovY8ZdfA="),
("Basilic", "https://media.istockphoto.com/id/871684266/fr/photo/feuilles-de-basilic-isol%C3%A9.jpg?s=612x612&w=0&k=20&c=Sr61VO8kXA_DSZX-uCI-GDQHkbY1v4cecZdrpfxg_CU="),
("Menthe", "https://media.istockphoto.com/id/1131562141/fr/photo/ingr%C3%A9dient-dherbes-vertes-de-menthe-fra%C3%AEche-de-feuille.jpg?s=612x612&w=0&k=20&c=2z-yC9aaaUcfoIyyS-bZjwnUDjGiRgxMCCxoVpnwY28="),
("Lentilles", "https://media.istockphoto.com/id/1094548132/fr/photo/lentilles-vertes.jpg?s=612x612&w=0&k=20&c=fDyDwGNl0UGhTnO9UAVxwZT-300tfiV7CwulwgHKGGQ="),
("Haricots verts", "https://media.istockphoto.com/id/182035936/fr/photo/des-f%C3%A8ves-frais.jpg?s=612x612&w=0&k=20&c=kNhlWl4b01ypvtEF5CiA-0j7tMdl3IuGYbeXqdsGSz0="),
("Épinards", "https://media.istockphoto.com/id/1211556813/fr/photo/pile-de-feuilles-vertes-fra%C3%AEches-d%C3%A9pinards-dor%C3%A9t%C3%A9es-isol%C3%A9es-sur-le-fond-blanc-fermez-vous.jpg?s=612x612&w=0&k=20&c=ygpYaERoN8-Dk0R2UpahLbDaVtVZESCV5cePE2swTKM="),
("Aubergine", "https://media.istockphoto.com/id/105493281/fr/photo/deux-grandes-tha%C3%AF-isol%C3%A9-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=YtFnBkzTgZiduJATbfABICR1ZBUfsp7zxtsu4ZnOTuI="),
("Brocoli", "https://media.istockphoto.com/id/183300149/fr/photo/brocoli.jpg?s=612x612&w=0&k=20&c=AScelsP0TwDeKLWp_HHjtSdikbUIIZ9c_gvlHe9Etdw="),
("Maïs", "https://media.istockphoto.com/id/841408966/fr/photo/%C3%A9pi-de-ma%C3%AFs-pr%C3%AAts-%C3%A0-%C3%A9clater-%C5%93il-isol%C3%A9-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=VBaAz84UKDeTJ1h1BAhhhPQXE32onvsk7Ra5LMMha_k="),
("Noix", "https://media.istockphoto.com/id/639478614/fr/photo/walnut-seul-sur-fond-blanc-avec-trait-de-coupe.jpg?s=612x612&w=0&k=20&c=CQb72_wmJMqmpE3jqry_MEl5AWlDozQGzPnaf6PCvgI="),
("Amande", "https://media.istockphoto.com/id/171342114/fr/photo/les-amandes.jpg?s=612x612&w=0&k=20&c=MpJ0F2JzQi70Wj_1F6ZYNJ2C-Ry7ilt11vrTv8zEucA="),
("Noisette", "https://media.istockphoto.com/id/133366333/fr/photo/composition-de-noisettes.jpg?s=612x612&w=0&k=20&c=UG2Dd6JadlFr3rDQWKvsPgtKwGi7qUVuA8fWZk9maeQ="),
("Jambon sec", "https://media.istockphoto.com/id/1320644427/fr/photo/tranches-de-prosciutto-coupe-de-jamon-espagnol-jambon-de-parme.jpg?s=612x612&w=0&k=20&c=vFU8qvHl9wC6ay-bbEvACoiyKXRWbGkaXasmHfADARQ="),
("Mogette", "https://media.istockphoto.com/id/694160532/fr/photo/tas-de-haricots-de-lima.jpg?s=612x612&w=0&k=20&c=OCnkp1CwW5SE3_TAsguWONfl0FMJVbLmsgRMslQk0Ms="),
("Jambon de Vendée", "https://media.istockphoto.com/id/146758706/fr/photo/jambon.jpg?s=612x612&w=0&k=20&c=nCafxErCH-H49hdELZqCnMANhWFWaj5PQWmb97Nuic4="),
("Mozarella", "https://media.istockphoto.com/id/1341216531/fr/photo/mozzarella-de-buffle-italien-isol%C3%A9e-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=kECFeXbgVpz8hqc3yFPlMmIZAqtz1f4CJB3gp3jeMD4="),
("Parmesan", "https://media.istockphoto.com/id/1136203798/fr/photo/fromage-parmesan-isol%C3%A9-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=aNsPqMumG55ows21B--2A-Lw2Dr2VZFzJnr7V8iUnjk="),
("Thon", "https://media.istockphoto.com/id/157615983/fr/photo/thon.jpg?s=612x612&w=0&k=20&c=pD9FFo6fnO7AhgdxpAhbNOOo3W4AfrgNkGGmO5_mRjg="),
("Cabillaud", "https://media.istockphoto.com/id/1435523504/fr/photo/morceaux-de-longe-de-morue-crue-isol%C3%A9s-sur-fond-blanc-poisson-%C3%A0-viande-blanche-d%C3%A9soss%C3%A9.jpg?s=612x612&w=0&k=20&c=Y-EBBVWa6HtOAK3ae5Kg053EOkG1vxyJsa7M7LCvqiA="),
("Truite", "https://media.istockphoto.com/id/164071647/fr/photo/truite-filet-avec-persil.jpg?s=612x612&w=0&k=20&c=Y8KQP-6cX09vcSZv-o5W_m2_QLIcbBRw35HkvaYiArE="),
("Canard", "https://media.istockphoto.com/id/503261003/fr/photo/canard.jpg?s=612x612&w=0&k=20&c=3NhA_5yC-xVBNd0tDK8rC3Vu6uB2GHGSX1qKGTq7cPo="),
("Boeuf", "https://media.istockphoto.com/id/1162717440/fr/photo/pile-de-cubes-de-boeuf-isol%C3%A9s-sur-le-blanc.jpg?s=612x612&w=0&k=20&c=2dPhQ8djX8w_8YmitwXovnw_8oVOJzjkxqpeAZnguqI="),
("Porc", "https://media.istockphoto.com/id/1162194568/fr/photo/viande-de-porc-crue-tranch%C3%A9e-au-romarin-isol%C3%A9e-sur-fond-blanc-vue-du-haut-la%C3%AFc-plat.jpg?s=612x612&w=0&k=20&c=qqMm-GHF4k6FKOZRvU0NYgz8bfhfCvf_axPATddLDlY="),
("Agneau", "https://media.istockphoto.com/id/538918713/fr/photo/c%C3%B4telettes-dagneau.jpg?s=612x612&w=0&k=20&c=7uqqguLOwEREagnrci6pW30xoMyjuUwXiCWFWwDi0bU="),
("Dinde", "https://media.istockphoto.com/id/1402330988/fr/photo/tranches-de-filet-de-viande-de-dinde-crue.jpg?s=612x612&w=0&k=20&c=PdRY7gFdAt2_WB7WaNI3TTst4QtznSSqk3FGXC0D7Ys="),
("Veau", "https://media.istockphoto.com/id/1411675365/fr/photo/morceaux-de-viande-de-b%C5%93uf-crus-hach%C3%A9s-isol%C3%A9s-sur-fond-blanc-d%C3%A9coup%C3%A9s.jpg?s=612x612&w=0&k=20&c=MdB1T4T3RSON-2yDSZvkoFQqasbv6NduDYEDpuR6V3A="),
("Lapin", "https://media.istockphoto.com/id/1124788064/fr/photo/viandes-de-patte-de-lapin-cru.jpg?s=612x612&w=0&k=20&c=DRadk5X6hJxDK5VKcwgJc6bMBLzkfjB_0TaWD9al9xU="),
("Bacon", "https://media.istockphoto.com/id/508755080/fr/photo/bacon-tranches-gros-plan-seul-sur-un-fond-blanc.jpg?s=612x612&w=0&k=20&c=tqzpXaOjwqPVM5U_PRrQXzqTUyHSQ64pV6SWJ_SxwhQ=")
;

-- -----------------------------------------------------
-- Table `potpiette`.`ingredient_recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`ingredient_recipe` (
  `recipe_id` INT NOT NULL,
  `ingredient_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `measure` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`recipe_id`, `ingredient_id`),
  INDEX `ingredient_id_idx` (`ingredient_id` ASC) VISIBLE,
  CONSTRAINT `fk_ingredient_id`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `potpiette`.`ingredient` (`id`),
  CONSTRAINT `fk_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Preload data ingredient_recipe
-- -----------------------------------------------------

INSERT INTO ingredient_recipe (recipe_id, ingredient_id, quantity, measure)
VALUES
(1, 4, 1, 'pièce'),
(1, 2, 3, 'tranches'),
(1, 1, 1, 'cuillère'),
(1, 3, 1, 'émincé'),
(1, 7, 1, 'feuille'),
(2, 9, 1, 'pièce'),
(2, 7, 3, 'tranches'),
(2, 8, 1, 'cuillère'),
(2, 5, 1, 'émincé'),
(2, 6, 1, 'feuille');


-- -----------------------------------------------------
-- Table `potpiette`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Preload data tags
-- -----------------------------------------------------

INSERT INTO tag (tag_name)
VALUES
("Rapide"),
("Plat"),
("Healthy"),
("Végétarien"),
("Dessert"),
("Cocktail");


-- -----------------------------------------------------
-- Table `potpiette`.`recipe_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`recipe_tag` (
  `recipe_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`recipe_id`, `tag_id`),
  INDEX `fk_tag_tag_id_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `fk_tag_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`),
  CONSTRAINT `fk_tag_tag_id`
    FOREIGN KEY (`tag_id`)
    REFERENCES `potpiette`.`tag` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Preload data recipe_tag
-- -----------------------------------------------------

INSERT INTO recipe_tag (recipe_id, tag_id)
VALUES
(1, 2),
(2, 2);



-- -----------------------------------------------------
-- Table `potpiette`.`step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`step` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nb_step` INT NOT NULL,
  `content` TINYTEXT NOT NULL,
  `recipe_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_step_recipe_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `fk_step_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Preload data steps
-- -----------------------------------------------------

INSERT INTO step (nb_step, content, recipe_id)
VALUES
(1, "Prendre le pain de votre choix, cela peut être un pain à burger industriel même si l'on aurait envie de vous conseiller un buns maison ou de chez votre boulanger préféré. Coupez le en deux. ", 1),
(2, "Emincez un oignon (rouge ou blanc) et faites le revenir dans une poêle légèrement beurré jusquà ce qu'il ai une belle couleur légèrement brune. Réservez.", 1),
(3, "Lavez soigneusement et coupez la tomate en tranche et réservez.", 1),
(4, "Détachez et lavez votre ou vos feuilles de salades et réservez.", 1),
(5, "Faites cuire à votre convenance votre steak haché. Vous pouvez mettre un peu de beurre si vous le souhaitez sinon le gras de votre steak fera l'affaire.", 1),
(6, "Assemblez! Dégustez!", 1),
(1, "Prendre le pain de votre choix, cela peut être un pain à burger industriel même si l'on aurait envie de vous conseiller un buns maison ou de chez votre boulanger préféré. Coupez le en deux. ", 2),
(2, "hot dog", 2),
(3, "Lavez soigneusement et coupez la tomate en tranche et réservez.", 2),
(4, "Détachez et lavez votre ou vos feuilles de salades et réservez.", 2),
(5, "Faites cuire à votre convenance votre steak haché. Vous pouvez mettre un peu de beurre si vous le souhaitez sinon le gras de votre steak fera l'affaire.", 2),
(6, "Assemblez votre hotdog! Dégustez!", 2);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


