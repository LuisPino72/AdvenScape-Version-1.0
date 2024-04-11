PGDMP      8                |         
   AdvenScape    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16397 
   AdvenScape    DATABASE     �   CREATE DATABASE "AdvenScape" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE "AdvenScape";
                postgres    false            �            1259    16463    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16448    Users    TABLE     ,  CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255),
    name character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    16453    Users_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Users_id_seq";
       public          postgres    false    215            �           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    216                       2604    16462    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    16463    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    217   �       �          0    16448    Users 
   TABLE DATA           `   COPY public."Users" (id, username, name, email, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �       �           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 25, true);
          public          postgres    false    216            &           2606    16467     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    217                        2606    16456    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    215            "           2606    16458    Users unique_email 
   CONSTRAINT     P   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT unique_email UNIQUE (email);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT unique_email;
       public            postgres    false    215            $           2606    16460    Users unique_username 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT unique_username UNIQUE (username);
 A   ALTER TABLE ONLY public."Users" DROP CONSTRAINT unique_username;
       public            postgres    false    215            �   +   x�32021014042264�M.JM,I�--N-��*����� ��	      �   �   x�}��n�0�g�):d����d����`Q
�%�ij�ԁ}�"�T-�r��o�@y���)�H]��:7[R�y�{�z:z����&m3ϟ]��P�#��/q���by���m�T�O�ޣ����P�!Hpv��A��mJ\["{����c�}�#�8�'�;k�����Z>e+�"�D�*cvѸ��/����	��q��k�1���QV     