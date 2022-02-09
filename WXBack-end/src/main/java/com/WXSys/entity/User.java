package com.WXSys.entity;

import java.util.List;

public class User {

    private String UName;
    private int Uid;
    private String Gender;
    private int Age;
    private int ifAdmin;
    private List<Integer> groups;
    private List<Composition> Compositions;
    private List<Tag> tags;

    public List<Integer> getGroups() {
        return groups;
    }

    public String getUName() {
        return UName;
    }

    public void setUName(String UName) {
        this.UName = UName;
    }

    public int getIfAdmin() {
        return ifAdmin;
    }

    public void setIfAdmin(int ifAdmin) {
        this.ifAdmin = ifAdmin;
    }

    public void setGroups(List<Integer> groups) {
        this.groups = groups;
    }

    public List<Composition> getCompositions() {
        return Compositions;
    }

    public void setCompositions(List<Composition> compositions) {
        Compositions = compositions;
    }

    public List<Tag> getTags() {
        return tags;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public int getUid() {
        return Uid;
    }

    public void setUid(int uid) {
        Uid = uid;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        this.Age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "Uid=" + Uid +
                ", Gender='" + Gender + '\'' +
                ", age=" + Age +
                '}';
    }
}
