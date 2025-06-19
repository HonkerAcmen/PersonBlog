/*
Navicat Premium Data Transfer

Source Server         : mysql
Source Server Type    : MySQL
Source Server Version : 80036 (8.0.36)
Source Host           : localhost:3306
Source Schema         : personBolg

Target Server Type    : MySQL
Target Server Version : 80036 (8.0.36)
File Encoding         : 65001

Date: 07/06/2025 09:12:55
*/

SET NAMES utf8mb4;

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL COMMENT '分类名称',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `post_id` bigint NOT NULL COMMENT '关联 posts.id',
    `username` varchar(50) NOT NULL COMMENT '评论者昵称',
    `content` text NOT NULL COMMENT '评论内容',
    `is_approved` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否审核通过：1-通过，0-待审核或已拒绝',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    KEY `fk_comments_post` (`post_id`),
    CONSTRAINT `fk_comments_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for post_tags
-- ----------------------------
DROP TABLE IF EXISTS `post_tags`;

CREATE TABLE `post_tags` (
    `post_id` bigint NOT NULL COMMENT '关联 posts.id',
    `tag_id` bigint NOT NULL COMMENT '关联 tags.id',
    PRIMARY KEY (`post_id`, `tag_id`),
    KEY `fk_post_tags_tag` (`tag_id`),
    CONSTRAINT `fk_post_tags_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_post_tags_tag` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `title` varchar(150) NOT NULL COMMENT '文章标题',
    `summary` text COMMENT '文章摘要',
    `content` longtext NOT NULL COMMENT 'Markdown 格式的文章内容',
    `cover_url` varchar(255) DEFAULT NULL COMMENT '封面图片 URL',
    `author_id` bigint NOT NULL COMMENT '关联 users.id',
    `category_id` bigint DEFAULT NULL COMMENT '关联 categories.id',
    `view_count` int NOT NULL DEFAULT '0' COMMENT '阅读量',
    `comment_count` int NOT NULL DEFAULT '0' COMMENT '评论数',
    `is_published` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已发布：1-已发布，0-草稿',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    KEY `fk_posts_author` (`author_id`),
    KEY `fk_posts_category` (`category_id`),
    CONSTRAINT `fk_posts_author` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
    CONSTRAINT `fk_posts_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL COMMENT '标签名称',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `id` bigint NOT NULL AUTO_INCREMENT,
    `username` varchar(50) NOT NULL COMMENT '用户名，唯一',
    `password` varchar(255) NOT NULL COMMENT '加密后的密码',
    `email` varchar(100) DEFAULT NULL,
    `role` varchar(10) NOT NULL,
    `is_active` tinyint(1) NOT NULL DEFAULT '1' COMMENT '账户是否启用：1-启用，0-禁用',
    `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `username` (`username`),
    CONSTRAINT `s1` CHECK (
        (
            `role` in (
                _utf8mb4 'admin',
                _utf8mb4 'edit',
                _utf8mb4 'guest'
            )
        )
    )
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;