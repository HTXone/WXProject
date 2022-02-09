package com.WXSys.entity;

import java.util.List;

public class Group {

    int Gid;
    String Name;
    String relation;
    int ifAdmin;
    int owner;

    List<User> users;

    public int getOwner() {
        return owner;
    }

    public void setOwner(int owner) {
        this.owner = owner;
    }

    public int getGid() {
        return Gid;
    }

    public void setGid(int gid) {
        Gid = gid;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public int getIfAdmin() {
        return ifAdmin;
    }

    public void setIfAdmin(int ifAdmin) {
        this.ifAdmin = ifAdmin;
    }
}
