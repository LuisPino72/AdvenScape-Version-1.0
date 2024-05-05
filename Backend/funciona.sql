PGDMP                       |         
   AdvenScape    16.2    16.2 ^    .           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            /           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            0           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            1           1262    16397 
   AdvenScape    DATABASE     �   CREATE DATABASE "AdvenScape" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Venezuela.1252';
    DROP DATABASE "AdvenScape";
                postgres    false            �            1259    16463    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    16448    Users    TABLE     �  CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(25),
    name character varying(30),
    email character varying(25),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    descripcion character varying(100),
    date timestamp with time zone,
    gender character varying(255),
    profile character varying
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
       public          postgres    false    215            2           0    0    Users_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;
          public          postgres    false    216            �            1259    24745    comments    TABLE     �   CREATE TABLE public.comments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.comments;
       public         heap    postgres    false            �            1259    24751    comments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.comments_id_seq;
       public          postgres    false    218            3           0    0    comments_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
          public          postgres    false    219            �            1259    24752 	   favorites    TABLE     �   CREATE TABLE public.favorites (
    id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.favorites;
       public         heap    postgres    false            �            1259    24756    favorites_id_seq    SEQUENCE     �   CREATE SEQUENCE public.favorites_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.favorites_id_seq;
       public          postgres    false    220            4           0    0    favorites_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.favorites_id_seq OWNED BY public.favorites.id;
          public          postgres    false    221            �            1259    24757 	   followers    TABLE     �   CREATE TABLE public.followers (
    id integer NOT NULL,
    user_id integer NOT NULL,
    follower_id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.followers;
       public         heap    postgres    false            �            1259    24761    followers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.followers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.followers_id_seq;
       public          postgres    false    222            5           0    0    followers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.followers_id_seq OWNED BY public.followers.id;
          public          postgres    false    223            �            1259    24762    hashtags    TABLE     '  CREATE TABLE public.hashtags (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    status character varying(1) NOT NULL,
    "deletedAt" timestamp without time zone,
    "createdAT" timestamp without time zone NOT NULL,
    "updatedAt" timestamp without time zone NOT NULL
);
    DROP TABLE public.hashtags;
       public         heap    postgres    false            �            1259    24765    hashtags_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.hashtags_id_seq;
       public          postgres    false    224            6           0    0    hashtags_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.hashtags_id_seq OWNED BY public.hashtags.id;
          public          postgres    false    225            �            1259    24766    likes    TABLE     �   CREATE TABLE public.likes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    post_id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.likes;
       public         heap    postgres    false            �            1259    24770    likes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.likes_id_seq;
       public          postgres    false    226            7           0    0    likes_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;
          public          postgres    false    227            �            1259    24771    notifications    TABLE     z  CREATE TABLE public.notifications (
    id integer NOT NULL,
    user_id integer NOT NULL,
    description text NOT NULL,
    type character varying(2) NOT NULL,
    is_read boolean DEFAULT false NOT NULL,
    status character(1) DEFAULT 'A'::bpchar NOT NULL,
    "deletedAt" timestamp without time zone,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.notifications;
       public         heap    postgres    false            �            1259    24779    notifications_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notifications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.notifications_id_seq;
       public          postgres    false    228            8           0    0    notifications_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.notifications_id_seq OWNED BY public.notifications.id;
          public          postgres    false    229            �            1259    24780    post    TABLE     ]  CREATE TABLE public.post (
    "createdAt" date,
    year integer,
    descripcion character varying,
    gender character varying,
    image character varying,
    link_soundcloud character varying,
    link_spotify character varying,
    link_youtube character varying,
    title character varying,
    id integer NOT NULL,
    user_id integer
);
    DROP TABLE public.post;
       public         heap    postgres    false            �            1259    24785    post_id_seq    SEQUENCE     �   CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.post_id_seq;
       public          postgres    false    230            9           0    0    post_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.post_id_seq OWNED BY public.post.id;
          public          postgres    false    231            �            1259    24786 	   post_tags    TABLE     �   CREATE TABLE public.post_tags (
    id integer NOT NULL,
    post_id integer,
    hashtag_id integer,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.post_tags;
       public         heap    postgres    false            �            1259    24790    post_tags_id_seq    SEQUENCE     �   CREATE SEQUENCE public.post_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.post_tags_id_seq;
       public          postgres    false    232            :           0    0    post_tags_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.post_tags_id_seq OWNED BY public.post_tags.id;
          public          postgres    false    233            �            1259    24791 	   user_tags    TABLE     �   CREATE TABLE public.user_tags (
    id integer NOT NULL,
    post_id integer,
    user_id integer,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.user_tags;
       public         heap    postgres    false            �            1259    24795    user_tags_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.user_tags_id_seq;
       public          postgres    false    234            ;           0    0    user_tags_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.user_tags_id_seq OWNED BY public.user_tags.id;
          public          postgres    false    235            K           2604    24796    Users id    DEFAULT     h   ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);
 9   ALTER TABLE public."Users" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            L           2604    24797    comments id    DEFAULT     j   ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);
 :   ALTER TABLE public.comments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            N           2604    24798    favorites id    DEFAULT     l   ALTER TABLE ONLY public.favorites ALTER COLUMN id SET DEFAULT nextval('public.favorites_id_seq'::regclass);
 ;   ALTER TABLE public.favorites ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            P           2604    24799    followers id    DEFAULT     l   ALTER TABLE ONLY public.followers ALTER COLUMN id SET DEFAULT nextval('public.followers_id_seq'::regclass);
 ;   ALTER TABLE public.followers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            R           2604    24800    hashtags id    DEFAULT     j   ALTER TABLE ONLY public.hashtags ALTER COLUMN id SET DEFAULT nextval('public.hashtags_id_seq'::regclass);
 :   ALTER TABLE public.hashtags ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            S           2604    24801    likes id    DEFAULT     d   ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);
 7   ALTER TABLE public.likes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            U           2604    24802    notifications id    DEFAULT     t   ALTER TABLE ONLY public.notifications ALTER COLUMN id SET DEFAULT nextval('public.notifications_id_seq'::regclass);
 ?   ALTER TABLE public.notifications ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            Y           2604    24803    post id    DEFAULT     b   ALTER TABLE ONLY public.post ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);
 6   ALTER TABLE public.post ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230            Z           2604    24804    post_tags id    DEFAULT     l   ALTER TABLE ONLY public.post_tags ALTER COLUMN id SET DEFAULT nextval('public.post_tags_id_seq'::regclass);
 ;   ALTER TABLE public.post_tags ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232            \           2604    24805    user_tags id    DEFAULT     l   ALTER TABLE ONLY public.user_tags ALTER COLUMN id SET DEFAULT nextval('public.user_tags_id_seq'::regclass);
 ;   ALTER TABLE public.user_tags ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234                      0    16463    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    217   Hn                 0    16448    Users 
   TABLE DATA           �   COPY public."Users" (id, username, name, email, password, "createdAt", "updatedAt", descripcion, date, gender, profile) FROM stdin;
    public          postgres    false    215   �n                 0    24745    comments 
   TABLE DATA           N   COPY public.comments (id, user_id, post_id, content, "createdAt") FROM stdin;
    public          postgres    false    218   �o                 0    24752 	   favorites 
   TABLE DATA           F   COPY public.favorites (id, user_id, post_id, "createdAt") FROM stdin;
    public          postgres    false    220   �o                 0    24757 	   followers 
   TABLE DATA           J   COPY public.followers (id, user_id, follower_id, "createdAt") FROM stdin;
    public          postgres    false    222   p                  0    24762    hashtags 
   TABLE DATA           [   COPY public.hashtags (id, name, status, "deletedAt", "createdAT", "updatedAt") FROM stdin;
    public          postgres    false    224   %p       "          0    24766    likes 
   TABLE DATA           B   COPY public.likes (id, user_id, post_id, "createdAt") FROM stdin;
    public          postgres    false    226   Bp       $          0    24771    notifications 
   TABLE DATA           r   COPY public.notifications (id, user_id, description, type, is_read, status, "deletedAt", "createdAt") FROM stdin;
    public          postgres    false    228   _p       &          0    24780    post 
   TABLE DATA           �   COPY public.post ("createdAt", year, descripcion, gender, image, link_soundcloud, link_spotify, link_youtube, title, id, user_id) FROM stdin;
    public          postgres    false    230   |p       (          0    24786 	   post_tags 
   TABLE DATA           I   COPY public.post_tags (id, post_id, hashtag_id, "createdAt") FROM stdin;
    public          postgres    false    232   �p       *          0    24791 	   user_tags 
   TABLE DATA           F   COPY public.user_tags (id, post_id, user_id, "createdAt") FROM stdin;
    public          postgres    false    234   �p       <           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 32, true);
          public          postgres    false    216            =           0    0    comments_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.comments_id_seq', 3, true);
          public          postgres    false    219            >           0    0    favorites_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.favorites_id_seq', 1, false);
          public          postgres    false    221            ?           0    0    followers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.followers_id_seq', 1, false);
          public          postgres    false    223            @           0    0    hashtags_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.hashtags_id_seq', 1, false);
          public          postgres    false    225            A           0    0    likes_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.likes_id_seq', 1, false);
          public          postgres    false    227            B           0    0    notifications_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.notifications_id_seq', 1, false);
          public          postgres    false    229            C           0    0    post_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.post_id_seq', 2, true);
          public          postgres    false    231            D           0    0    post_tags_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.post_tags_id_seq', 1, false);
          public          postgres    false    233            E           0    0    user_tags_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_tags_id_seq', 1, false);
          public          postgres    false    235            e           2606    16467     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    217            _           2606    16456    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    215            g           2606    24807    comments comments_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_pkey;
       public            postgres    false    218            i           2606    24809    favorites favorites_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_pkey;
       public            postgres    false    220            k           2606    24811    followers followers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT followers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.followers DROP CONSTRAINT followers_pkey;
       public            postgres    false    222            m           2606    24813    hashtags hashtags_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.hashtags DROP CONSTRAINT hashtags_name_key;
       public            postgres    false    224            o           2606    24815    hashtags hashtags_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.hashtags DROP CONSTRAINT hashtags_pkey;
       public            postgres    false    224            q           2606    24817    likes likes_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_pkey;
       public            postgres    false    226            s           2606    24819     notifications notifications_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.notifications DROP CONSTRAINT notifications_pkey;
       public            postgres    false    228            u           2606    24821    post post_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.post DROP CONSTRAINT post_pkey;
       public            postgres    false    230            w           2606    24823    post_tags post_tags_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.post_tags DROP CONSTRAINT post_tags_pkey;
       public            postgres    false    232            a           2606    24944    Users unique_email 
   CONSTRAINT     P   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT unique_email UNIQUE (email);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT unique_email;
       public            postgres    false    215            c           2606    24926    Users unique_username 
   CONSTRAINT     V   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT unique_username UNIQUE (username);
 A   ALTER TABLE ONLY public."Users" DROP CONSTRAINT unique_username;
       public            postgres    false    215            y           2606    24825    user_tags user_tags_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.user_tags
    ADD CONSTRAINT user_tags_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.user_tags DROP CONSTRAINT user_tags_pkey;
       public            postgres    false    234            z           2606    24826    comments comments_post_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
 H   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_post_id_fkey;
       public          postgres    false    4725    230    218            {           2606    24831    comments comments_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 H   ALTER TABLE ONLY public.comments DROP CONSTRAINT comments_user_id_fkey;
       public          postgres    false    4703    218    215            |           2606    24836     favorites favorites_post_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
 J   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_post_id_fkey;
       public          postgres    false    230    4725    220            }           2606    24841     favorites favorites_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.favorites
    ADD CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 J   ALTER TABLE ONLY public.favorites DROP CONSTRAINT favorites_user_id_fkey;
       public          postgres    false    4703    220    215            ~           2606    24846 $   followers followers_follower_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT followers_follower_id_fkey FOREIGN KEY (follower_id) REFERENCES public."Users"(id) NOT VALID;
 N   ALTER TABLE ONLY public.followers DROP CONSTRAINT followers_follower_id_fkey;
       public          postgres    false    4703    222    215                       2606    24851     followers followers_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.followers
    ADD CONSTRAINT followers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 J   ALTER TABLE ONLY public.followers DROP CONSTRAINT followers_user_id_fkey;
       public          postgres    false    4703    222    215            �           2606    24856    post id_user    FK CONSTRAINT     w   ALTER TABLE ONLY public.post
    ADD CONSTRAINT id_user FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 6   ALTER TABLE ONLY public.post DROP CONSTRAINT id_user;
       public          postgres    false    215    230    4703            �           2606    24861    likes likes_post_id_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id);
 B   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_post_id_fkey;
       public          postgres    false    226    230    4725            �           2606    24866    likes likes_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 B   ALTER TABLE ONLY public.likes DROP CONSTRAINT likes_user_id_fkey;
       public          postgres    false    4703    215    226            �           2606    24871 (   notifications notifications_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id);
 R   ALTER TABLE ONLY public.notifications DROP CONSTRAINT notifications_user_id_fkey;
       public          postgres    false    215    228    4703            �           2606    24876 #   post_tags post_tags_hashtag_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_hashtag_id_fkey FOREIGN KEY (hashtag_id) REFERENCES public.hashtags(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.post_tags DROP CONSTRAINT post_tags_hashtag_id_fkey;
       public          postgres    false    224    4719    232            �           2606    24881     post_tags post_tags_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.post_tags
    ADD CONSTRAINT post_tags_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.post_tags DROP CONSTRAINT post_tags_post_id_fkey;
       public          postgres    false    4725    230    232            �           2606    24886     user_tags user_tags_post_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tags
    ADD CONSTRAINT user_tags_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.post(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.user_tags DROP CONSTRAINT user_tags_post_id_fkey;
       public          postgres    false    234    230    4725            �           2606    24891     user_tags user_tags_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_tags
    ADD CONSTRAINT user_tags_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.user_tags DROP CONSTRAINT user_tags_user_id_fkey;
       public          postgres    false    215    234    4703               +   x�32021014042264�M.JM,I�--N-��*����� ��	         ;  x�}��n�@������[7��Q��-A�*�f9t��AܶO_ �'�&_f����7##0o�Z�+x�KnXI�F�CB�-w���ٕ�`�u��ֆ��v�?�<5-��V��9�V���xk�o� ���2�x�S�ME�����ys�	��q7m�����.�����=IƠ�1���K���.rf�}.X�K��(VS���*}潣eZ�ge7]Ker�T[:��H����.�3�{�H풢},2�֗k9E̒?�m�kx� M��<&�|��0ℛ*����zd����~(F$�z-�#�.���$} �r�R            x������ � �            x������ � �            x������ � �             x������ � �      "      x������ � �      $      x������ � �      &      x������ � �      (      x������ � �      *      x������ � �     