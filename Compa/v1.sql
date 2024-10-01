PGDMP  :                	    |            Compa    16.4    16.4 
    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    Compa    DATABASE     {   CREATE DATABASE "Compa" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Compa";
                postgres    false            �            1259    16405    arrangements    TABLE       CREATE TABLE public.arrangements (
    "arrangementId" uuid,
    title text,
    description text,
    gender numeric,
    "minAge" numeric,
    tag uuid,
    "startTime" text,
    "endTime" text,
    place text,
    "creatorId" uuid,
    "membersIds" uuid[],
    "maxAge" numeric
);
     DROP TABLE public.arrangements;
       public         heap    postgres    false            �            1259    24597    tags    TABLE     >   CREATE TABLE public.tags (
    "tagId" uuid,
    name text
);
    DROP TABLE public.tags;
       public         heap    postgres    false            �            1259    16400    users    TABLE     �   CREATE TABLE public.users (
    "userId" uuid,
    name text,
    surname text,
    age numeric,
    gender numeric,
    "tagList" uuid[],
    login text,
    password text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    16405    arrangements 
   TABLE DATA           �   COPY public.arrangements ("arrangementId", title, description, gender, "minAge", tag, "startTime", "endTime", place, "creatorId", "membersIds", "maxAge") FROM stdin;
    public          postgres    false    216   �	       �          0    24597    tags 
   TABLE DATA           -   COPY public.tags ("tagId", name) FROM stdin;
    public          postgres    false    217   2       �          0    16400    users 
   TABLE DATA           a   COPY public.users ("userId", name, surname, age, gender, "tagList", login, password) FROM stdin;
    public          postgres    false    215   `       �   /  x��RKn1]{N�]68*�휅��۾D�LD�Ĉ,`!V,�|B&�\�|#ʝ���q��_�_�z9��3"����C��(z?��b6Q;������9��8'鼭�u��82��'��sJ���6��V<��벮x=�q�����[NS]�zF��n�=5����K
�u��:%:]z���tq.��e�<�� �����6���י�83�����/�xI���Oި
�#n
8��w%�$���`��r0� x�)��%�#&y��s.�([D�L7��}^�u=�MӬ��1�߈sʜ�?"�솄��ns]Ε�))묑����=�[�yR����oz툹��i�O�}'���?t���fZ�^����m_:��Ȓ�����!8��ͽ�=	`��� (���F��6�#�a��/�y-��@����4�,�T�M����M��U�'ݐ&gm�����!��_�ah�~��7>�G|h�Q%�<7h&�u�r�Fo���k�%����\�?֕ @�Ï�]]�S5&Ұ�h�I5�x��X,~����      �     x�]��MC1E��U�� �cO/l��#v�( 	!$
@�"E��¸#�����s��D�5���D�T���ӎr'/�%w����*oL��T�Ї��56�#{�E��$籗�ة����=
�9����OL�j��|����0^�,�rR�#3���u�\���1#Su-�E��g��Q5[C6�!#" 96�AKEk�=�:->����Nκ�:vr|�CSl�t��Մ�n��6�`��C�x����~�͢�����}'L�������0�N�z���&��ӣR�.��N      �   K  x�-�?JD1�뼳82�L&�]l�W,�P�EXm,,��N� ˂����nd�.�	�|�1:f�%�r��"x*1������/��o��1�����F���XϏ�}����ФP�L��6a�ngEC2-��AL�-ʍ"m��L䲴 q��x_�B���|j���fT�y��}����b�5��qv��o8�zoj��c�!CB
�����U>���D 13��0��B��X˹������P�i�f0��,n��L��%��T�o��v�����>$�L�#�j-��	XgɍtJ�6q5�p���y��"a4h$��!nWחg��k:9���eB�     