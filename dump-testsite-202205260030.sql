--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-05-26 00:30:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3451 (class 1262 OID 24847)
-- Name: testsite; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE testsite WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';


ALTER DATABASE testsite OWNER TO postgres;

\connect testsite

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 24861)
-- Name: reports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reports (
    row_id integer NOT NULL,
    reports_name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userRowId" integer
);


ALTER TABLE public.reports OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24860)
-- Name: reports_row_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reports_row_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reports_row_id_seq OWNER TO postgres;

--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 211
-- Name: reports_row_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reports_row_id_seq OWNED BY public.reports.row_id;


--
-- TOC entry 214 (class 1259 OID 24882)
-- Name: reports_tables; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reports_tables (
    row_id integer NOT NULL,
    table_name character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "reportRowId" integer,
    "tableValueRowId" integer,
    report_name character varying(255)
);


ALTER TABLE public.reports_tables OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24881)
-- Name: reports_tables_row_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reports_tables_row_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reports_tables_row_id_seq OWNER TO postgres;

--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 213
-- Name: reports_tables_row_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reports_tables_row_id_seq OWNED BY public.reports_tables.row_id;


--
-- TOC entry 210 (class 1259 OID 24849)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    row_id integer NOT NULL,
    login character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    region character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 24848)
-- Name: users_row_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_row_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_row_id_seq OWNER TO postgres;

--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_row_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_row_id_seq OWNED BY public.users.row_id;


--
-- TOC entry 3285 (class 2604 OID 24864)
-- Name: reports row_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports ALTER COLUMN row_id SET DEFAULT nextval('public.reports_row_id_seq'::regclass);


--
-- TOC entry 3286 (class 2604 OID 24885)
-- Name: reports_tables row_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports_tables ALTER COLUMN row_id SET DEFAULT nextval('public.reports_tables_row_id_seq'::regclass);


--
-- TOC entry 3283 (class 2604 OID 24852)
-- Name: users row_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN row_id SET DEFAULT nextval('public.users_row_id_seq'::regclass);


--
-- TOC entry 3443 (class 0 OID 24861)
-- Dependencies: 212
-- Data for Name: reports; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.reports VALUES (1, 'Животноводство', '2022-04-19 19:28:46.65+03', '2022-04-19 19:28:46.65+03', NULL);
INSERT INTO public.reports VALUES (2, 'Зернофуражный баланс', '2022-04-19 19:28:59.969+03', '2022-04-19 19:28:59.969+03', NULL);
INSERT INTO public.reports VALUES (3, 'Кадры', '2022-04-19 19:29:16.045+03', '2022-04-19 19:29:16.045+03', NULL);
INSERT INTO public.reports VALUES (4, 'Растениеводство', '2022-04-19 19:29:27.371+03', '2022-04-19 19:29:27.371+03', NULL);
INSERT INTO public.reports VALUES (5, 'Техника', '2022-04-19 19:29:31.794+03', '2022-04-19 19:29:31.794+03', NULL);


--
-- TOC entry 3445 (class 0 OID 24882)
-- Dependencies: 214
-- Data for Name: reports_tables; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.reports_tables VALUES (7, 'Молоко СХП', '2022-04-19 20:15:38.119+03', '2022-04-19 20:15:38.119+03', NULL, NULL, 'Животноводство');
INSERT INTO public.reports_tables VALUES (8, 'Молоко КФХ', '2022-04-19 20:15:43.302+03', '2022-04-19 20:15:43.302+03', NULL, NULL, 'Животноводство');
INSERT INTO public.reports_tables VALUES (9, 'Заготовка кормов', '2022-04-19 20:15:51.861+03', '2022-04-19 20:15:51.861+03', NULL, NULL, 'Животноводство');
INSERT INTO public.reports_tables VALUES (10, 'Кукуруза на силос', '2022-04-19 20:16:00.146+03', '2022-04-19 20:16:00.146+03', NULL, NULL, 'Животноводство');
INSERT INTO public.reports_tables VALUES (11, 'Кадры', '2022-04-19 20:16:12.06+03', '2022-04-19 20:16:12.06+03', NULL, NULL, 'Кадры');
INSERT INTO public.reports_tables VALUES (13, 'Баланс', '2022-04-19 20:16:59.696+03', '2022-04-19 20:16:59.696+03', NULL, NULL, 'Зернофуражный баланс');
INSERT INTO public.reports_tables VALUES (14, 'ГСМ', '2022-04-19 20:17:18.187+03', '2022-04-19 20:17:18.187+03', NULL, NULL, 'Техника');
INSERT INTO public.reports_tables VALUES (15, 'Наличие сх тех', '2022-04-19 20:17:27.297+03', '2022-04-19 20:17:27.297+03', NULL, NULL, 'Техника');
INSERT INTO public.reports_tables VALUES (16, 'Комбайны', '2022-04-19 20:17:33.183+03', '2022-04-19 20:17:33.183+03', NULL, NULL, 'Техника');
INSERT INTO public.reports_tables VALUES (17, 'Готовность сх тех', '2022-04-19 20:17:45.236+03', '2022-04-19 20:17:45.236+03', NULL, NULL, 'Техника');
INSERT INTO public.reports_tables VALUES (18, 'Свеклоуборочные комбайны', '2022-04-19 20:17:59.205+03', '2022-04-19 20:17:59.205+03', NULL, NULL, 'Техника');
INSERT INTO public.reports_tables VALUES (19, 'Уборка плод-ягод', '2022-04-19 20:18:38.894+03', '2022-04-19 20:18:38.894+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (20, 'Уборка овощей', '2022-04-19 20:18:47.787+03', '2022-04-19 20:18:47.787+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (21, 'Подготовка почвы', '2022-04-19 20:18:56.052+03', '2022-04-19 20:18:56.052+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (22, 'Уборка подсолнечника', '2022-04-19 20:19:10.115+03', '2022-04-19 20:19:10.115+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (23, 'Уборка свеклы', '2022-04-19 20:19:17.196+03', '2022-04-19 20:19:17.196+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (24, 'Уборка сои', '2022-04-19 20:19:48.122+03', '2022-04-19 20:19:48.122+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (25, 'Остатки зерна', '2022-04-19 20:20:14.922+03', '2022-04-19 20:20:14.922+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (26, 'Подкормка', '2022-04-19 20:20:22.227+03', '2022-04-19 20:20:22.227+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (27, 'Состояние посевов', '2022-04-19 20:20:29.68+03', '2022-04-19 20:20:29.68+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (28, 'Удобрение весна', '2022-04-19 20:20:43.107+03', '2022-04-19 20:20:43.107+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (29, 'Удобрение осень', '2022-04-19 20:20:46.65+03', '2022-04-19 20:20:46.65+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (30, 'Боронование', '2022-04-19 20:21:32.385+03', '2022-04-19 20:21:32.385+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (31, 'Сев яровых', '2022-04-19 20:21:45.57+03', '2022-04-19 20:21:45.57+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (32, 'Сев картофеля', '2022-04-19 20:21:50.222+03', '2022-04-19 20:21:50.222+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (33, 'Сев овощебахчевых', '2022-04-19 20:21:59.744+03', '2022-04-19 20:21:59.744+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (34, 'Закладка мн. насаждений', '2022-04-19 20:22:15.046+03', '2022-04-19 20:22:15.046+03', NULL, NULL, 'Растениеводство');
INSERT INTO public.reports_tables VALUES (35, 'Сев озимых', '2022-05-24 00:51:17.387+03', '2022-05-24 00:51:17.387+03', NULL, NULL, 'Растениеводство');


--
-- TOC entry 3441 (class 0 OID 24849)
-- Dependencies: 210
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES (2, 'anna', '$2b$05$y9xKjBmeHMukkEKi/ck0bu8B8aL8oqWNmyZg.Rvoz9nvAxyNCD4JS', 'USER', '2022-04-20 00:48:40.612+03', '2022-04-20 00:48:40.612+03', 'Анна');
INSERT INTO public.users VALUES (4, 'admin', '$2b$05$3gE4G2LlfCu/L9aEiUYVI.631hq/xsEkIwLHSD9ivM60qQPu1sUq.', 'ADMIN', '2022-04-23 00:51:05.098+03', '2022-04-23 00:51:05.098+03', '');
INSERT INTO public.users VALUES (6, 'bobrov', '$2b$05$uqiZmHBnpO5FJVJzjIeIXeGHFYxRwAHE/iDsYClcLJij56QN9F10i', 'USER', '2022-04-23 19:04:59.565+03', '2022-04-23 19:04:59.565+03', 'Бобров');
INSERT INTO public.users VALUES (7, 'Test', '$2b$05$/e01YPAIJEBEYyoeDxL9AeaJTzp7XI6mc76BmzK8VniNyVFAEVSoy', 'USER', '2022-05-21 13:30:45.9+03', '2022-05-21 13:30:45.9+03', 'Анна');


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 211
-- Name: reports_row_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reports_row_id_seq', 10, true);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 213
-- Name: reports_tables_row_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reports_tables_row_id_seq', 35, true);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 209
-- Name: users_row_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_row_id_seq', 7, true);


--
-- TOC entry 3292 (class 2606 OID 24866)
-- Name: reports reports_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_pkey PRIMARY KEY (row_id);


--
-- TOC entry 3294 (class 2606 OID 24868)
-- Name: reports reports_reports_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT reports_reports_name_key UNIQUE (reports_name);


--
-- TOC entry 3296 (class 2606 OID 24887)
-- Name: reports_tables reports_tables_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports_tables
    ADD CONSTRAINT reports_tables_pkey PRIMARY KEY (row_id);


--
-- TOC entry 3298 (class 2606 OID 24889)
-- Name: reports_tables reports_tables_table_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports_tables
    ADD CONSTRAINT reports_tables_table_name_key UNIQUE (table_name);


--
-- TOC entry 3288 (class 2606 OID 24859)
-- Name: users users_login_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_key UNIQUE (login);


--
-- TOC entry 3290 (class 2606 OID 24857)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (row_id);


--
-- TOC entry 3300 (class 2606 OID 24890)
-- Name: reports_tables reports_tables_reportRowId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports_tables
    ADD CONSTRAINT "reports_tables_reportRowId_fkey" FOREIGN KEY ("reportRowId") REFERENCES public.reports(row_id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3299 (class 2606 OID 24869)
-- Name: reports reports_userRowId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reports
    ADD CONSTRAINT "reports_userRowId_fkey" FOREIGN KEY ("userRowId") REFERENCES public.users(row_id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2022-05-26 00:30:49

--
-- PostgreSQL database dump complete
--

